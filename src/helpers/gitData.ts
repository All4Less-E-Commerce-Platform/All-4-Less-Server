import Rank from '../models/Ranks';
import axios from 'axios';
import { Products, Ranks } from '../models';
import { Optional } from 'sequelize';

export const gitDataHandler = async () => {
  const Homeoptions = {
    method: 'GET',
    url: 'https://insights.alibaba.com/openservice/gatewayService',
    params: {
      callback: 'jsonp_1733397663451_31080',
      ctoken: 'undefined',
      _tb_token_: 'undefined',
      mtop: 'false',
      modelId: '10465',
      deliveryId: 'undefined',
      cardId: '',
      deliveryBomId: '',
      categoryIds: '',
      topOfferIds: '',
      // pageSize: '100',
      pageNo: 11,
      offerLimit: '',
      appKey: 'vee8meczxjj3hugfjlmg0t4zh4skimd3',
      appNameCarry: 'asinHomePage',
      appName: 'asinHomePage',
      endpoint: 'pc',
      pageDeduplicateId: 'zhfyh6lzwricadwj1733397384949132e2cc031a76',
      cardType: '101002745',
      bucket: 'undefined',
    },
    headers: {
      Host: 'insights.alibaba.com',
      Cookie: `ali_apache_id=33.1.238.204.1733396897771.322896.8; NWG=NNW; cookie2=afd12628264a14829931016823418afa; ali_apache_track=; ali_apache_tracktmp=; xlly_s=1; icbu_s_tag=9_11; cna=zHfYH6lzWRICAdWJUiT8xFgC; uns_unc_f=trfc_i=ppc^k6lt9e0u^^1ieb8cch3; buyer_ship_to_info=local_country=US; sc_g_cfg_f=sc_b_currency=USD&sc_b_locale=en_US&sc_b_site=US; ug_se_c=organic_1733397408419; tfstk=fbyrpfaevCpf9iBBd0ke3CPV9BM-FYb_qJgIxkqnV40oP_IeLqzEdu1dwXkEuy3SNYDQuX4QlYguR7gnxqzkdbaQLSpUXke52vs-euHKKN_1CGZ82vLSQPDGlojnvYe0fhX_2uK0_xyv4OTEhtCYq24nZjcmvqmkEbch0jmsxvvotLADoq3m-v0oKtcmx0Rnx4Al0o0xvvmntl23C_nKZGLfSwiGKelsSu0uRyymEFggqjvHKvi-aHZoupv3HSwlltuFnFuLnykiKf-1zuH4UPo_Ptvz7uVg-5qRbQu_Zlha1jTXiuDmYPoaz1--55E_9fMNOBHzk8UEfy6ywPcEzS2ogHv3mx3SOWkMosg0grHqDJ_vE2P0t8G-pUbrKooh4gYKmhgUp78HTbmx0VsV0cq4NME3T7WH9Bh-Dmu1qEOp9b0i0VsV0BdKNQiq5gYf.; isg=BDEx58Ow8pEz3V6FCihws0cGQLTLHqWQrAgLKBNGHPgeOlGMWG5SYRsUXNZcwz3I`,
      'Sec-Ch-Ua': '',
      'Sec-Ch-Ua-Mobile': '?0',
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5790.171 Safari/537.36',
      'Sec-Ch-Ua-Platform': '',
      Accept: '*/*',
      'Sec-Fetch-Site': 'same-site',
      'Sec-Fetch-Mode': 'no-cors',
      'Sec-Fetch-Dest': 'script',
      Referer:
        'https://sale.alibaba.com/p/rank/list.html?spm=a2700.product_home_newuser.scenario_overview.topRanking&wx_navbar_transparent=true',
      'Accept-Encoding': 'gzip, deflate',
      'Accept-Language': 'en-US,en;q=0.9',
    },
  };

  const ApparelAccessoriesOptions = {
    method: 'GET',
    url: 'https://insights.alibaba.com/openservice/gatewayService',
    params: {
      callback: 'jsonp_1733493887670_93016',
      ctoken: 'undefined',
      _tb_token_: 'undefined',
      mtop: 'false',
      modelId: '74',
      deliveryId: '4074511_902871401_STOCK_25_50733036',
      cardId: '',
      deliveryBomId: '',
      categoryIds: '3',
      topOfferIds: '',
      pageSize: '1000',
      pageNo: '1',
      appKey: 'vee8meczxjj3hugfjlmg0t4zh4skimd3',
      appNameCarry: 'asinHomePage',
      appName: 'asinHomePage',
      endpoint: 'pc',
      pageDeduplicateId: 'r+jzh7oyghscas/217334937596336c8c24b48c550',
      need_reweight: 'false',
      reweight_ids: 'rts',
      reweight_value: '1.2',
    },
    headers: {
      Host: 'insights.alibaba.com',
      Cookie: `sc_g_cfg_f=sc_b_currency=USD&sc_b_locale=en_US; ali_apache_id=33.1.245.61.1730636230584.644454.4; cookie2=a34f151aa2d8c16d32eae5faad0b82ed; icbu_s_tag=9_11; cna=R+jZH7OYGhsCAS/2gMwsH/FL; buyer_ship_to_info=local_country=PS; xman_us_f=x_l=0; acs_usuc_t=acs_rt=b3cb014a999949e59af28b63410b5e06; xman_t=PQIAA500vNFL+H7ASyVo/4Ky40pXLWzKJYKMzDmS5BuVIheryo+BoAtrifdR72hD13cqbUtDILlWDQet+8f6A2TdFIfP8Y6j; xman_f=ZAOfW1oHBd7M1zQKYkXZ1ynrf/S0vE8gEuzoud81hDeP8pusTWeHEmWC9SolZAhkF+is7CeBU++zCaZQk6aQP7H50WyN7q5TxouhISEN5dtnswhx3Dn0+A==; seo_f=trafc_i=seo; ali_apache_track=; ali_apache_tracktmp=; NWG=SNW; _m_h5_tk=c481cd4d15f4f6625bd3b01553b14cd8_1733495724651; _m_h5_tk_enc=ddc89557ce2fbe599932b7dd40b18cb1; ug_se_c=organic_1733493872509; isg=BFJSDJjBYb68qJ02Jg59ljrqoxE0Y1b9HwyurxyvY4TbL_gpB_FBDMsBm5MTX86V; tfstk=f8gjUu1FKW2rq9K2A1dzF96kRv4_lATE61NttfQV6rUABOhLUI4Z0h4_fAyru-l4kzctsANZ0AlYrRMtdZ74ul815fnuQZ3ssNNt6AA0QIxrij4gWpJeUelmi4OPA53fk7e-ZWeOkYci-4zgWpJyocImrPDhoVTqXbd7_5WABAEYe7FQe5IYWAe82WFFHPHTWQa8TWeOMlEYyUFUeRUTHAURwj0pM7_zUjOr2oXKVNfEZ8_ORTV4DEhObZ743SZjWyw7Yku7GowLqbV4bVGI6qzSAOKxOz0Ub4hy5a4qO0U8GALpHuc-xxVsZtK4HDcEPrk6yizTk8UqkPfHsucL3ru706SxOk2bl4EdFEyxxbnUf4WfRPujwqPoC6Iqilnrok02eZaKxjzqXYL5lvIrWwyISDj6f07_NJRWNGjMrDIXHd9nTmZYZ7BMNQseMoFuN8RWNGX0D7V-LQO5YIC..`,
      'Sec-Ch-Ua': '"Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
      'Sec-Ch-Ua-Mobile': '?0',
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      'Sec-Ch-Ua-Platform': '"Linux"',
      Accept: '*/*',
      'Sec-Fetch-Site': 'same-site',
      'Sec-Fetch-Mode': 'no-cors',
      'Sec-Fetch-Dest': 'script',
      Referer: 'https://www.alibaba.com/',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'en-US,en;q=0.6',
    },
  };

  const ElectronicsOptions = {
    url: 'https://insigresponsehts.alibaba.com/openservice/gatewayService',
    params: {
      callback: 'jsonp_1733658642177_95549',
      ctoken: 'undefined',
      _tb_token_: 'undefined',
      mtop: 'false',
      modelId: '11190',
      deliveryId: 'undefined',
      cardId: '44',
      deliveryBomId: '',
      categoryIds: '',
      topOfferIds: '',
      pageSize: '1000',
      pageNo: '1',
      offerLimit: '',
      appKey: 'vee8meczxjj3hugfjlmg0t4zh4skimd3',
      appNameCarry: 'asinHomePage',
      appName: 'asinHomePage',
      endpoint: 'pc',
      pagDeduplicateId: '012345678900000017336584810613a7060212a58a',
      cardType: '101002784',
    },
  };

  const ShoesOptions = {
    url: 'https://insights.alibaba.com/openservice/gatewayService',
    params: {
      callback: 'jsonp_1733663676464_30067',
      ctoken: 'undefined',
      _tb_token_: 'undefined',
      mtop: 'false',
      modelId: '74',
      deliveryId: '4297509_902971402_STOCK_25_33367529',
      cardId: '',
      deliveryBomId: '',
      categoryIds: '322',
      topOfferIds: '',
      pageSize: '1000',
      pageNo: '1',
      offerLimit: '',
      appKey: 'vee8meczxjj3hugfjlmg0t4zh4skimd3',
      appNameCarry: 'asinHomePage',
      appName: 'asinHomePage',
      endpoint: 'pc',
      pageDeduplicateId: '012345678900000017336636641809f914d728c4ee',
      need_reweight: 'false',
      reweight_ids: 'rts',
      reweight_value: '1.2',
    },
  };

  const JewelryAndWatchesOptions = {
    url: 'https://insights.alibaba.com/openservice/gatewayService',
    params: {
      callback: 'jsonp_1733832324389_7345',
      ctoken: 'undefined',
      _tb_token_: 'undefined',
      mtop: 'false',
      modelId: '74',
      deliveryId: '3609018_902916005_STOCK_25_44326032',
      cardId: '',
      deliveryBomId: '',
      categoryIds: '36',
      topOfferIds: '',
      pageSize: '1000',
      pageNo: '1',
      offerLimit: '',
      appKey: 'vee8meczxjj3hugfjlmg0t4zh4skimd3',
      appNameCarry: 'asinHomePage',
      appName: 'asinHomePage',
      endpoint: 'pc',
      pageDeduplicateId: 'zhfyh6lzwricadwj173383229709829db117519dbd',
      need_reweight: 'false',
      reweight_ids: 'rts',
      reweight_value: '1.2',
    },
  };

  const IndustrialMachineryOptions = {
    url: 'https://insights.alibaba.com/openservice/gatewayService',
    params: {
      callback: 'jsonp_1733841094556_26879',
      ctoken: 'undefined',
      _tb_token_: 'undefined',
      mtop: 'false',
      modelId: '74',
      deliveryId: '4066512_902915206_STOCK_25_95682161',
      categoryIds: '43', // Make sure to use the category ID for Industrial Machinery if different
      pageSize: '1000',
      pageNo: '1',
      offerLimit: '',
      appKey: 'vee8meczxjj3hugfjlmg0t4zh4skimd3',
      appNameCarry: 'asinHomePage',
      appName: 'asinHomePage',
      endpoint: 'pc',
      pageDeduplicateId: 'r+jzh7oyghscas/2173384057459331774ba2f8855',
      need_reweight: 'false',
      reweight_ids: 'rts',
      reweight_value: '1.2',
    },
  };
  const GitHomeData = async () => {
    try {
      await axios.request(Homeoptions).then(async (response: { data: any }) => {
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

  const GitElectronics = async () => {
    try {
      await axios
        .get(ElectronicsOptions.url, {
          params: ElectronicsOptions.params,
          headers: {
            Accept: 'application/json',
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5790.171 Safari/537.36',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'no-cors',
            'Sec-Fetch-Dest': 'script',
            Referer: 'https://sale.alibaba.com/',
          },
        })
        // eslint-disable-next-line promise/prefer-await-to-then
        .then(async (response: { data: any }) => {
          const { data } = response;
          const jsonpStart = data.indexOf('(') + 1;
          const jsonpEnd = data.lastIndexOf(')');
          const jsonString = data.substring(jsonpStart, jsonpEnd);
          const jsonObject = JSON.parse(jsonString);
          if (jsonObject.data.list.length === 0) {
            return null;
          }
          let ran = await Ranks.findOne({
            where: { rankName: 'Consumer Electronics' },
          });
          if (!ran) {
            console.log('Electronics ran not found');
            ran = await Ranks.create({
              rankName: 'Consumer Electronics',
              rankNameEn: 'Consumer Electronics',
              rankWord: 'Consumer Electronics',
              rankWordEn: 'Consumer Electronics',
              rankDescription: 'Consumer Electronics',
              rankDescriptionEn: 'Consumer Electronics',
            });
          }

          const id = String(ran.dataValues.id);

          Products.destroy({ where: { rankId: id }, logging: false });

          jsonObject.data.list.forEach(async (item: any) => {
            const checkExist = await Products.findOne({
              where: { productId: item.productId },
            });
            if (checkExist) {
              return;
            }
            Products.create(
              {
                ...item,
                category: 'Consumer Electronics',
                rankId: id,
                price: item.alibabaGuaranteedPrice,
              },
              { logging: false },
            );
          });
          console.log('Consumer Electronics created successfully');
        });
    } catch (error) {
      console.error(error);
    }
  };

  const GitIndustrialMachinery = async () => {
    try {
      await axios
        .get(IndustrialMachineryOptions.url, {
          params: IndustrialMachineryOptions.params,
          headers: {
            Accept: 'application/json',
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5790.171 Safari/537.36',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'no-cors',
            'Sec-Fetch-Dest': 'script',
            Referer: 'https://sale.alibaba.com/',
          },
        })
        // eslint-disable-next-line promise/prefer-await-to-then
        .then(async (response: { data: any }) => {
          const { data } = response;
          const jsonpStart = data.indexOf('(') + 1;
          const jsonpEnd = data.lastIndexOf(')');
          const jsonString = data.substring(jsonpStart, jsonpEnd);
          const jsonObject = JSON.parse(jsonString);
          if (jsonObject.data.list.length === 0) {
            return null;
          }
          let ran = await Ranks.findOne({
            where: { rankName: 'Industrial Machinery' },
          });
          if (!ran) {
            console.log('Industrial Machinery ran not found');
            ran = await Ranks.create({
              rankName: 'Industrial Machinery',
              rankNameEn: 'Industrial Machinery',
              rankWord: 'Industrial Machinery',
              rankWordEn: 'Industrial Machinery',
              rankDescription: 'Industrial Machinery',
              rankDescriptionEn: 'Industrial Machinery',
            });
          }

          const id = String(ran.dataValues.id);

          Products.destroy({ where: { rankId: id }, logging: false });

          jsonObject.data.list.forEach(async (item: any) => {
            const checkExist = await Products.findOne({
              where: { productId: item.productId },
            });
            if (checkExist) {
              return;
            }
            Products.create(
              {
                ...item,
                category: 'Industrial Machinery',
                rankId: id,
                price: item.alibabaGuaranteedPrice,
              },
              { logging: false },
            );
          });
          console.log('Industrial Machinery created successfully');
        });
    } catch (error) {
      console.error(error);
    }
  };

  const GitApparelAccessories = async () => {
    try {
      await axios
        .request(ApparelAccessoriesOptions)
        .then(async (response: { data: any }) => {
          const { data } = response;
          const jsonpStart = data.indexOf('(') + 1;
          const jsonpEnd = data.lastIndexOf(')');
          const jsonString = data.substring(jsonpStart, jsonpEnd);
          const jsonObject = JSON.parse(jsonString);

          if (jsonObject.data.list.length === 0) {
            return null;
          }
          let ran = await Ranks.findOne({
            where: { rankName: 'Apparel & Accessories' },
          });
          if (!ran) {
            console.log('ran not found');
            ran = await Ranks.create({
              rankName: 'Apparel & Accessories',
              rankNameEn: 'Apparel & Accessories',
              rankWord: 'Apparel & Accessories',
              rankWordEn: 'Apparel & Accessories',
              rankDescription: 'Apparel & Accessories',
              rankDescriptionEn: 'Apparel & Accessories',
            });
          }

          const id = String(ran.dataValues.id);

          Products.destroy({ where: { rankId: id }, logging: false });
          jsonObject.data.list.forEach(async (item: any) => {
            const checkExist = await Products.findOne({
              where: { productId: item.productId },
            });
            if (checkExist) {
              console.log('Product already exists');

              return;
            }
            Products.create(
              { ...item, category: 'Apparel & Accessories', rankId: id },
              { logging: false },
            );
          });
          console.log(jsonObject.data.list[0]);

          console.log('Apparel & Accessories created successfully');
        });
    } catch (error) {
      console.log(error);
    }
  };

  const GitShoes = async () => {
    try {
      await axios
        .get(ShoesOptions.url, {
          params: ShoesOptions.params,
          headers: {
            Accept: 'application/json',
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5790.171 Safari/537.36',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'no-cors',
            'Sec-Fetch-Dest': 'script',
            Referer: 'https://sale.alibaba.com/',
          },
        })
        .then(async (response: { data: any }) => {
          const { data } = response;
          const jsonpStart = data.indexOf('(') + 1;
          const jsonpEnd = data.lastIndexOf(')');
          const jsonString = data.substring(jsonpStart, jsonpEnd);
          const jsonObject = JSON.parse(jsonString);

          if (jsonObject.data.list.length === 0) {
            return null;
          }

          let ran = await Ranks.findOne({
            where: { rankName: 'Shoes' },
          });

          if (!ran) {
            console.log('rank not found');
            ran = await Ranks.create({
              rankName: 'Shoes',
              rankNameEn: 'Shoes',
              rankWord: 'Shoes',
              rankWordEn: 'Shoes',
              rankDescription: 'Shoes',
              rankDescriptionEn: 'Shoes',
            });
          }

          const id = String(ran.dataValues.id);

          Products.destroy({ where: { rankId: id }, logging: false });

          jsonObject.data.list.forEach(async (item: any) => {
            const checkExist = await Products.findOne({
              where: { productId: item.productId },
            });
            if (checkExist) {
              return;
            }
            Products.create(
              {
                ...item,
                category: 'Shoes',
                rankId: id,
                price: item.alibabaGuaranteedPrice,
              },
              { logging: false },
            );
          });
          console.log('Shoes created successfully');
        });
    } catch (error) {
      console.error(error);
    }
  };

  const GitWatches = async () => {
    try {
      await axios
        .get(JewelryAndWatchesOptions.url, {
          params: JewelryAndWatchesOptions.params,
          headers: {
            Accept: 'application/json',
            'User-Agent':
              'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'en-US,en;q=0.5',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'no-cors',
            'Sec-Fetch-Dest': 'script',
            Referer: 'https://www.alibaba.com/',
          },
        })
        .then(async (response: { data: any }) => {
          const { data } = response;
          const jsonpStart = data.indexOf('(') + 1;
          const jsonpEnd = data.lastIndexOf(')');
          const jsonString = data.substring(jsonpStart, jsonpEnd);
          const jsonObject = JSON.parse(jsonString);
          if (jsonObject.data.list.length === 0) {
            return null;
          }
          let ran = await Ranks.findOne({
            where: { rankName: 'JewelryAndWatches' },
          });
          if (!ran) {
            console.log('Rank not found');
            ran = await Ranks.create({
              rankName: 'JewelryAndWatches',
              rankNameEn: 'JewelryAndWatches',
              rankWord: 'JewelryAndWatches',
              rankWordEn: 'JewelryAndWatches',
              rankDescription: 'JewelryAndWatches',
              rankDescriptionEn: 'JewelryAndWatches',
            });
          }

          const id = String(ran.dataValues.id);

          // Clear previous entries before inserting new ones
          Products.destroy({ where: { rankId: id }, logging: false });

          // Process the incoming product data
          jsonObject.data.list.forEach(async (item: Optional<any, string>) => {
            const checkExist = await Products.findOne({
              where: { productId: item.productId },
            });
            if (checkExist) {
              return;
            }
            Products.create(
              {
                ...item,
                category: 'JewelryAndWatches',
                rankId: id,
                price: item.alibabaGuaranteedPrice,
              },
              { logging: false },
            );
          });
          console.log('Jewelry And Watches created successfully');
        });
    } catch (error) {
      console.error(error);
    }
  };

  // cron.schedule('*/5 * * * *', async () => {

  const insertData = async () => {
    console.log('starting');
    await GitHomeData();
    await GitApparelAccessories();
    await GitElectronics();
    await GitShoes();
    await GitWatches();
    await GitIndustrialMachinery();
    console.log('Finished');
  };

  insertData();
};
