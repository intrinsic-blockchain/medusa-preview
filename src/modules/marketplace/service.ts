import { MedusaService } from "@medusajs/utils"
import Vendor from "./models/vendor"
import VendorAdmin from "./models/vendor-admin"
// import { CreateVendorData, VendorData } from "./types"

class MarketplaceModuleService extends MedusaService({
  Vendor,
  VendorAdmin,
}) {
}

export default MarketplaceModuleService
