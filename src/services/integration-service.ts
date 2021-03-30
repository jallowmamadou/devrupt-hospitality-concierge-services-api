import { ApaleoOauth } from './apaleo-oauth';
import axios from 'axios';

export class IntegrationService {
  async getToken() {
    return (await new ApaleoOauth().getToken()).token;
  }

  public async create() {
    const { uiIntegrations, count } = await this.getIntegration();

    if (!count) {
      return await this.createIntegration();
    }

    return uiIntegrations.find((ui: any) => ui.code === 'GUESSENGER');
  }

  private async getIntegration() {
    return (
      await axios({
        method: 'GET',
        url:
          'https://integration.apaleo.com/integration/v1/ui-integrations/PropertyMenuApps',
        headers: {
          Authorization: 'Bearer ' + (await this.getToken()),
        },
      })
    ).data;
  }

  private async createIntegration() {
    return axios({
      method: 'POST',
      url:
        'https://integration.apaleo.com/integration/v1/ui-integrations/PropertyMenuApps',
      data: {
        code: 'GUESSENGER',
        label: 'Guest Messenger',
        labelTranslations: {
          de: 'Gast-Messenger',
          es: 'Mensajero invitado',
        },
        iconSource:
          'https://eu.ui-avatars.com/api/?name=Guest+Messenger&background=0D8ABC&color=fff',
        sourceUrl: 'https://guessenger.netlify.app/admin/chats',
        sourceType: 'Public',
        roles: ['PROPERTYADMIN', 'FRONTDESK'],
      },
      headers: {
        Authorization: 'Bearer ' + (await this.getToken()),
        'Content-Type': 'application/json-patch+json',
      },
    }).then((response) => response.data);
  }
}
