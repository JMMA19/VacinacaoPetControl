import { Connection } from 'typeorm';
import { VacinaTipo } from '../entity/vacina-tipo.entity';


export const petProviders = [
  {
    provide: 'VACINA-TIPO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(VacinaTipo),
    inject: ['DATABASE_CONNECTION'],
  },
];