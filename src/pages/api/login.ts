import type { NextApiRequest, NextApiResponse } from 'next';
import AuthService from './services/authentication';

type AuthProps = {
  id: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const auth = new AuthService();
  const token = auth.tokenGenerate<AuthProps>({
    id: '63740a7b2b93fe2da3bb2b77',
  });
  res.status(200).json({ token });
}
