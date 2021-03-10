describe("Helpers test", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 10;
      submitPaymentInfo();
    });
  
    it('should calculate total tip amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(10);
  
      billAmtInput.value = 200;
      tipAmtInput.value = 20;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipAmt')).toEqual(30);
    });
  
    it('should calculate total bill amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(100);
  
      billAmtInput.value = 200;
      tipAmtInput.value = 40;
  
      submitPaymentInfo();
      expect(sumPaymentTotal('billAmt')).toEqual(300);
    });
  
    it('should calculate total tip percent on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(10);
  
      billAmtInput.value = 100;
      tipAmtInput.value = 20;

      submitPaymentInfo();
      expect(sumPaymentTotal('tipPercent')).toEqual(30);
    });
  
    it('should sum tip percent of a single tip on calculateTipPercent()', function () {
      expect(calculateTipPercent(100, 23)).toEqual(23);
      expect(calculateTipPercent(111, 11)).toEqual(10);
    });
  
    it('should generate new td and append to tr on appendTd()', function () {
      let newTr = document.createElement('tr');
  
      appendTd(newTr, 'test');
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('test');
    });
  
    it('should generate delete button and append to tr on appendDeleteBtn()', function () {
      let newTr = document.createElement('tr');
  
      appendDeleteBtn(newTr);
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('X');
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });