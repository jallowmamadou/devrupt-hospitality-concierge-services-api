import { ApaleoOauth } from './apaleo-oauth';
import { WebhookAPI } from '../../clients/apaleo/webhook';

export class Webhook {
  private readonly apiClient = new WebhookAPI(
    new ApaleoOauth(),
    'https://webhook.apaleo.com'
  );

  public async setup() {
    return await this.apiClient.subscriptionsPost({
      endpointUrl: process.env.WEBHOOK_API_ENDPOINT,
      topics: ['Reservation', 'Folio'],
    });
  }
}
