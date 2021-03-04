describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should Create table row element and pass to appendTd function with input value', function () {
    submitServerInfo();
    updateServerTable();
    const tableData = document.querySelectorAll('tbody tr td')

    expect(tableData.length).toEqual(2)
    expect(tableData[0].innerText).toEqual('Alice')
    expect(tableData[1].innerText).toEqual('$0.00')
    expect(tableData[2].innerText).toEqual('X')

  });

  afterEach(function() {
    allServers = {};
    serverId = 0;

  });
});
