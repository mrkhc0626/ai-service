import * as Utils from "../utils";
import * as Services from "../services";

export const getHealth = async (req, res) => {
  try {
    // Get Health
    let data = await Services.checkHealth();

    return Utils.returnApiResponse(req, res, { msg: "success", data });
  } catch (e) {
    return Utils.returnCatchError(e, res, req);
  }
};
