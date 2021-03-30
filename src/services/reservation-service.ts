import {
  ApaleoBookingAPI,
  ReservationModel,
} from '../../clients/apaleo/booking/client';
import { ApaleoOauth } from './apaleo-oauth';
import { ApaleoFinanceAPI } from '../../clients/apaleo/finance';

export class ReservationService {
  private readonly apiClient = new ApaleoBookingAPI(
    new ApaleoOauth(),
    'https://api.apaleo.com'
  );

  public async getReservationById(id: string): Promise<ReservationModel> {
    try {
      const result = await this.apiClient.bookingReservationsByIdGet(id);
      return result._response.parsedBody;
    } catch (error) {
      console.log(error);
    }
  }

  public async checkout(id: string) {
    try {
      const result = await this.apiClient.bookingReservationActionsByIdCheckoutPut(
        id
      );

      return result._response.parsedBody;
    } catch (error) {
      console.log(error);
    }
  }

  async getFolios(id: string) {
    const finance = new ApaleoFinanceAPI(
      new ApaleoOauth(),
      'https://api.apaleo.com'
    );

    return await finance.financeFoliosGet({
      reservationIds: [id],
      expand: ['charges'],
    });
  }
}
