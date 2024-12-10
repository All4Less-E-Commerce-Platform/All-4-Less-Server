import Rank from '../models/Ranks';
import axios from 'axios';
import { Products, Ranks } from '../models';
import { Optional } from 'sequelize';

const requestData = async (options: Axios.AxiosXHRConfig<unknown>) => {
  try {
    const response: any = await axios.request(options);
    const { data } = response;
    const jsonpStart = data.indexOf('(') + 1;
    const jsonpEnd = data.lastIndexOf(')');
    const jsonString = data.substring(jsonpStart, jsonpEnd);
    const jsonObject = JSON.parse(jsonString);
    return jsonObject;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const handleProductData = async (productData: any[], rankName: string) => {
  const createdRanks = await Rank.findOrCreate({
    where: { rankName },
    defaults: {
      rankName,
      rankNameEn: rankName,
      rankWord: rankName,
      rankWordEn: rankName,
      rankDescription: rankName,
      rankDescriptionEn: rankName,
    },
  });

  const rankInstance = createdRanks[0];
  const products = productData.flatMap(rank => {
    const rankName = rank.rankName;
    const rankId = rankInstance.id;
    return rank.productList.map((product: any) => ({
      ...product,
      rankId,
      category: rankName,
    }));
  });

  // Fetch existing productIds to avoid duplicates
  const existingProductIds = await Products.findAll({
    attributes: ['productId'],
    raw: true,
  });

  const existingIdsSet = new Set(
    existingProductIds.map(product => product.productId),
  );

  // Filter out products with duplicate productIds
  const uniqueProducts = products.filter(
    product => !existingIdsSet.has(product.productId),
  );

  if (uniqueProducts.length > 0) {
    await Promise.all(
      uniqueProducts.map(async product => {
        const checkExist = await Products.findOne({
          where: { productId: product.productId },
        });
        if (!checkExist) {
          await Products.create(product, { logging: false });
        }
      }),
    );
    console.log('Products created');
  } else {
    existingIdsSet.forEach(async item => {
      const product = products.find(p => p.productId === item);
      if (product) {
        await Products.update(product, { where: { productId: item } });
      }
    });
    console.log('No new products to insert, all products already exist');
  }
};

export const gitDataHandler = async () => {
  const homeOptions = {
    method: 'GET',
    url: 'https://insights.alibaba.com/openservice/gatewayService',
    params: {
      callback: 'jsonp_1733397663451_31080',
      appKey: 'vee8meczxjj3hugfjlmg0t4zh4skimd3',
      appNameCarry: 'asinHomePage',
      appName: 'asinHomePage',
      pageNo: 11,
      cardType: '101002745',
      bucket: 'undefined',
    },
    headers: {
      Host: 'insights.alibaba.com',
      Cookie: `ali_apache_id=33.1.238.204.1733396897771.322896.8; NWG=NNW; cookie2=afd12628264a14829931016823418afa; ali_apache_track=; ali_apache_tracktmp=; xlly_s=1; icbu_s_tag=9_11; cna=zHfYH6lzWRICAdWJUiT8xFgC; uns_unc_f=trfc_i=ppc^k6lt9e0u^^1ieb8cch3; buyer_ship_to_info=local_country=US; sc_g_cfg_f=sc_b_currency=USD&sc_b_locale=en_US&sc_b_site=US; ug_se_c=organic_1733397408419; tfstk=fbyrpfaevCpf9iBBd0ke3CPV9BM-FYb_qJgIxkqnV40oP_IeLqzEdu1dwXkEuy3SNYDQuX4QlYguR7gnxqzkdbaQLSpUXke52vs-euHKKN_1CGZ82vLSQPDGlojnvYe0fhX_2uK0_xyv4OTEhtCYq24nZjcmvqmkEbch0jmsxvvotLADoq3m-v0oKtcmx0Rnx4Al0o0xvvmntl23C_nKZGLfSwiGKelsSu0uRyymEFggqjvHKvi-aHZoupv3HSwlltuFnFuLnykiKf-1zuH4UPo_Ptvz7uVg-5qRbQu_Zlha1jTXiuDmYPoaz1--55E_9fMNOBHzk8UEfy6ywPcEzS2ogHv3mx3SOWkMosg0grHqDJ_vE2P0t8G-pUbrKooh4gYKmhgUp78HTbmx0VsV0cq4NME3T7WH9Bh-Dmu1qEOp9b0i0VsV0BdKNQiq5gYf.; isg=BDEx58Ow8pEz3V6FCihws0cGQLTLHqWQrAgLKBNGHPgeOlGMWG5SYRsUXNZcwz3I`,
    },
  };

  const electronicsOptions = {
    url: 'https://insigresponsehts.alibaba.com/openservice/gatewayService',
    params: {
      callback: 'jsonp_1733658642177_95549',
      modelId: '11190',
      cardId: '44',
      pageSize: '1000',
      pageNo: '1',
      appKey: 'vee8meczxjj3hugfjlmg0t4zh4skimd3',
    },
  };

  const apparelAccessoriesOptions = {
    method: 'GET',
    url: 'https://insights.alibaba.com/openservice/gatewayService',
    params: {
      callback: 'jsonp_1733493887670_93016',
      modelId: '74',
      deliveryId: '4074511_902871401_STOCK_25_50733036',
      categoryIds: '3',
      pageSize: '1000',
      pageNo: '1',
      appKey: 'vee8meczxjj3hugfjlmg0t4zh4skimd3',
    },
  };

  // Fetch Home Data
  // const homeData = await requestData(homeOptions);
  // if (homeData) {
  //   await handleProductData(homeData.data.list, 'Home');
  // }

  const GitHomeData = async () => {
    try {
      await axios.request(homeOptions).then(async (response: { data: any }) => {
        const { data } = response;

        // Parse the JSONP data
        const jsonpStart = data.indexOf('(') + 1;
        const jsonpEnd = data.lastIndexOf(')');
        const jsonString = data.substring(jsonpStart, jsonpEnd);
        const jsonObject = JSON.parse(jsonString);

        // Clear the Ranks table
        await Rank.destroy({ where: {}, logging: false });
        console.log('Ranks table cleared');

        const DataObject = jsonObject.data.list;
        const createdRanks = await Rank.bulkCreate(DataObject, {
          logging: false,
        });

        console.log('Ranks created');

        const products = jsonObject.data.list.flatMap((rank: any) => {
          const rankName = rank.rankName; // Adjust this field based on the JSON structure
          const rankInstance = createdRanks.find(
            (r: any) => r.rankName === rankName, // Match the rank by name or other identifier
          );

          if (!rankInstance) {
            console.warn(`Rank with name "${rankName}" not found`);
            return [];
          }

          return rank.productList.map((product: any) => ({
            ...product,
            rankId: rankInstance.id,
            category: rank.rankName,
          }));
        });

        // Fetch existing productIds to avoid duplicates
        const existingProductIds = await Products.findAll({
          attributes: ['productId'],
          raw: true,
        });

        const existingIdsSet = new Set(
          existingProductIds.map(product => product.productId),
        );

        // Filter out products with duplicate productIds
        const uniqueProducts = products.filter(
          (product: { productId: string }) =>
            !existingIdsSet.has(product.productId),
        );

        if (uniqueProducts.length > 0) {
          await Promise.all(
            uniqueProducts.map(async (product: any) => {
              const checkExist = await Products.findOne({
                where: { productId: product.productId },
              });
              if (checkExist) {
                return;
              }
              await Products.create(product, { logging: false });
            }),
          );
          console.log('Products created');
        } else {
          const existingIdsArray = Array.from(existingIdsSet);
          existingIdsArray.map(async item => {
            const product = products.filter(
              (p: { productId: string }) => p.productId === item,
            )[0];
            Products.update(product, { where: { productId: item } });
          });
          console.log('No new products to insert, all products already exist');
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  await GitHomeData();

  // Fetch Electronics Data
  const electronicsData: any = await requestData(electronicsOptions);
  if (electronicsData) {
    await handleProductData(electronicsData.data.list, 'Consumer Electronics');
  }

  // Fetch Apparel & Accessories Data
  const apparelData: any = await requestData(apparelAccessoriesOptions);
  if (apparelData) {
    await handleProductData(apparelData.data.list, 'Apparel & Accessories');
  }
};
