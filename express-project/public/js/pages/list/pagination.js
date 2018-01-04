function Pagination(container) {
  this.container = container;
}

$.extend(Pagination.prototype, {
  setTotal: function(total) {
    alert(total);
  }
})