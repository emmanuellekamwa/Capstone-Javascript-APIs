
  export default  async (itemId) => {
    const request = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pXlrPxLwgnIhKy0gtUs5/comments?item_id=${itemId}`);
    const commentData = await request.json();
    return commentData;
  };
  
  