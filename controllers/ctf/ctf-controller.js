import axios from "axios";

const findCTFEvent = async (req, res) => {
  const eventId = req.params.ctfid;
  let event;
  try {
    event = await axios.get(`https://ctftime.org/api/v1/events/${eventId}/`, {
      headers: {
        "user-agent": "curl/7.87.0",
        accept: "*",
      },
    });
  } catch (e) {
    res.json({});
    return;
  }
  res.json(event.data);
};

export default (app) => {
  app.get("/api/ctf/:ctfid", findCTFEvent);
};
