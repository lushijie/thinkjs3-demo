module.exports = class extends think.Logic {
  get scope() {
    return {
      app_id: {
        required: true
      },
    }
  }

  indexAction() {
    this.rules = {
      username: {
        required: true
      }
    }
  }
};
