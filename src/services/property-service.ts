import { ApaleoInventoryAPI } from '../../clients/apaleo/property';
import { ApaleoOauth } from './apaleo-oauth';

export class PropertyService {
  private readonly apiClient = new ApaleoInventoryAPI(
    new ApaleoOauth(),
    process.env.APALEO_BASE_URL
  );

  public async findProperty(propertyId: string) {
    try {
      const result = await this.apiClient.inventoryPropertiesByIdGet(
        propertyId
      );

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  public async propertyExists(propertyId: string) {
    try {
      const result = await this.apiClient.inventoryPropertiesByIdHead(
          propertyId
      );

      return result;
    } catch (error) {
      console.log(error);
    }
  }

}
