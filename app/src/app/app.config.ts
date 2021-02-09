import { IAppConfig } from './core/interfaces/app-config.interface';
import { name, version } from '../../package.json';
import { backend, notificationTime } from '../config/config.json';
import { TitlePipe } from './shared/pipes/title.pipe';

export const APP_CONFIG: IAppConfig = {
    title: new TitlePipe().transform(name),
    version,
    backend,
    notificationTime
};
