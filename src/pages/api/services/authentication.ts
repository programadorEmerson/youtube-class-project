import jwt from 'jsonwebtoken';
import { returnEnv } from '../../../utils/returnEnv';
import { EnvEnum } from '../enviroments';

class AuthService {
  public tokenGenerate<T>(dataInfo: T) {
    const token = jwt.sign({ tokenInfo: dataInfo }, returnEnv(EnvEnum.SECRET), {
      expiresIn: '24h',
    });
    return token;
  }
}

export default AuthService;
