// import { Request, Response } from 'express';
// import { subscribeSchema } from '../schemes';
// // import { Product, Subscribe } from '../models';
// import CustomError from '../helpers/errorHandler/CustomError';
// // import { generateEmail, sendEmail } from '../helpers/services/emaile';

// export const subscribeController = async (req: Request, res: Response) => {
//   const { email } = req.body;
//   await subscribeSchema.validateAsync({ email });
//   const checkExist = await Subscribe.findOne({ where: { email } });
//   if (checkExist) {
//     throw new CustomError(400, 'You have account!');
//   } else {
//     await Subscribe.create({ email });
//   }
//   const { emailBody, emailText } = generateEmail({
//     name: email.split('@')[0],
//     greeting: 'Hello',
//     signature: 'Thanks you',
//     intro:
//       "We are glad you joined our community. As a member of MSS, you now have access to a wide range of services. Whether you're here to join an upcoming match or create your own, feel free to explore our platform and tell your friends about it! <br> <br> Link: https://mss-client.vercel.app/",
//     outro:
//       'If you have any questions or need assistance, feel free to reach out to us. We are here to help!',
//   });

//   await sendEmail({
//     to: email,
//     subject: 'Account activated successfully!',
//     text: emailText,
//     message: emailBody,
//   });

//   res.status(201).json({
//     status: 201,
//     msg: 'Subscribed successfully',
//   });
// };

// export const announcementController = async (req: Request, res: Response) => {
//   const { productId } = req.params;

//   const checkExist = await Product.findOne({
//     where: { id: +productId, active: true },
//   });

//   if (!checkExist) {
//     throw new CustomError(404, 'Product not active!');
//   } else {
//     const users = await Subscribe.findAll({});
//     users?.map(async user => {
//       const { emailBody, emailText } = generateEmail({
//         name: user.dataValues.email.split('@')[0],
//         greeting: 'Hello',
//         signature: 'Thanks you',
//         intro: `The MSS team is pleased to inform you that there is a new and exclusive product at an exclusive price that was offered today, <br>
//         don't miss the opportunity before the quantity runs out, <br>
//         here is some information about the product <br>
//         <br>
//         <img style="width: 400px; height: 400px; " src="${checkExist.dataValues.cover}" alt="image"/>
//         <br>
//         Product Name: ${checkExist.dataValues.title} <br>
//         Description: ${checkExist.dataValues.description} <br>

//         Link: https://mss-client.vercel.app/product/${productId} <br>
//         `,
//         outro:
//           'If you have any questions or need assistance, feel free to reach out to us. We are here to help!',
//       });

//       await sendEmail({
//         to: user.dataValues.email,
//         subject: 'Account activated successfully!',
//         text: emailText,
//         message: emailBody,
//       });
//     });
//     await Product.update(
//       { mails: checkExist.dataValues.mails + 1 },
//       { where: { id: +productId } },
//     );
//     res.status(200).json({
//       status: 200,
//       msg: 'mail sent successfully',
//     });
//   }
// };
