// prepoPulate takes in a mongoose model and a document as arguments
// and inserts the document to the collection defined by the model.
async function prePopulate(Model, document) {
  const { _id } = await new Model(document).save();
  return _id;
}

module.exports = {
  prePopulate,
};
