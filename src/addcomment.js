export default async (commentData) => {
  if (commentData.user.trim() && commentData.comment.trim()) {
    await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pXlrPxLwgnIhKy0gtUs5/comments/',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(commentData),
      },
    );
    return true;
  }
  return false;
};
