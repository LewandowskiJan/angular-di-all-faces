import { Environment } from './model/environment.model';
import { Environments } from './model/environments.enum';

export const environment: Environment = {
  production: false,
  env: Environments.MOUNTAIN,
};
