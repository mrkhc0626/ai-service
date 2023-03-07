import * as Utils from "../utils";
import * as Services from "../services";

export const startAI = async (req, res) => {
  try {
    await Utils.checkRequiredFields(req.body, ["content"]);
    const { content } = req.body;

    // Get Health
    let data = await Services.createChatCompletion({
      content: content,
    });

    return Utils.returnApiResponse(req, res, { msg: "success", data });
  } catch (e) {
    console.log("Start A.I.", e);
    return Utils.returnCatchError(e, res, req);
  }
};
