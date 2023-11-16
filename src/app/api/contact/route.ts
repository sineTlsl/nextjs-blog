import { sendEmail } from '@/service/email';
import * as yup from 'yup';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  // 1. POST 요청이 오면 유효한 이메일 폼 데이터 포맷인지 확인 후, 맞지 않을 경우 400
  // 2. 데이터 포맷이 유효하다면 sendEmail 실행
  // 3. 이메일 전송이 성공하면 200
  // 4. 이메일 전송이 실패하면 500

  const body = await req.json();

  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: '메일 전송에 실패함!' }), {
      status: 400,
    });
  }

  return sendEmail(body) //
    .then(
      () =>
        new Response(JSON.stringify({ message: '메일을 성공적으로 보냈음!' }), {
          status: 200,
        })
    )
    .catch((err) => {
      console.error(err);
      new Response(JSON.stringify({ message: '메일 전송에 실패함!' }), {
        status: 500,
      });
    });
}
