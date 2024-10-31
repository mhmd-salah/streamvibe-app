import axios from "axios";
import urlConstants from "../../Constant/urlConstants";

const fetchAllShows = async () => {
  const response = await axios.get(urlConstants.fetchShowsUrl);
  return response.data;
};

const showsServices = {
  fetchAllShows,
};

export default showsServices;
