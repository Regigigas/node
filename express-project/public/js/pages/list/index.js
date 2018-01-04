function Page() {

}

$.extend(Page.prototype, {
  init: function () {
    this.createHeader();
    this.createAddPosition();
    this.createPositionList();
    this.createPagination();
  },
  createHeader: function () {
    var headerContainer = $(".js-header");
    this.header = new Header(headerContainer, 1);
  },
  createAddPosition: function () {
    var positionContainer = $(".js-container");
    this.addPosition = new AddPosition(positionContainer);
  },
  createPositionList: function () {
    var positionContainer = $(".js-container");
    this.PositionList = new PositionList(positionContainer);
    $(this.PositionList).on('change', $.proxy(this.handleListChange, this))
  },
  createPagination: function () {
    var paginationContainer = $(".js-pagination");
    this.pagination = new Pagination(paginationContainer);
  },
  handleListChange: function (e) {
    this.pagination.setTotal(e.total);
  }
})
