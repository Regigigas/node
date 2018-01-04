function PositionList(container) {
  this.container = container;
  this.page = 1;
  this.size = 10;
  this.init();
}

PositionList.Temp = `
  <table class="table">
    <thead>
      <tr>
        <th>序号</th>
        <th>公司</th>
        <th>职位</th>
        <th>薪资</th>
        <th>地址</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody class="js-tbody"></tbody>
  </table>
`;

$.extend(PositionList.prototype, {
  init: function () {
    this.createDom();
    this.getListInfo();
  },
  createDom: function () {
    this.element = $(PositionList.Temp);
    this.container.append(this.element);
  },
  getListInfo: function () {
    $.ajax({
      url: '/api/getPositionList',
      data: {
        page: this.page,
        size: this.size
      },
      success: $.proxy(this.handleGetListInfoSucc, this)
    })
  },
  handleGetListInfoSucc: function (res) {
    if (res && res.data && res.data.list) {
        this.createItems(res.data.list);
        $(this).trigger( new $.Event("change", {
          total: res.data.totalPage
        }))
    }
  },
  createItems: function (list) {
    var itemContainer = this.element.find(".js-tbody"),
        str = '';
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        str += `
          <tr>
            <td>${i}</td>
            <td>${item.company}</td>
            <td>${item.position}</td>
            <td>${item.salary}</td>
            <td>${item.address}</td>
          </tr>
        `;
    }
    itemContainer.html(str);
    // console.log(str);
  }
})