describe("payments test setup and teardown", function() {

    beforeEach(function() {
        
        billAmtInput.value = 100
        tipAmtInput.value = 10

    })

    it('should add a curPayment object to allPayments, update html and reset input values', function() {
        
        submitPaymentInfo()
        expect(Object.keys(allPayments).length).toEqual(1)
        expect(allPayments['payment1'].billAmt).toEqual('100')
        expect(allPayments['payment1'].tipAmt).toEqual('10')
        expect(allPayments['payment1'].tipPercent).toEqual(10)

    })

    it('should not add a curPayment object without input', function() {
        
        billAmtInput.value = ''
        submitPaymentInfo()
        expect(Object.keys(allPayments).length).toEqual(0)

    })

    it('should update payment table on appendPaymentTable', function() {
        
        let curPayment = createCurPayment()
        let tableData = document.querySelectorAll('#paymentTable tbody tr td')
        
        allPayments['payment1'] = curPayment
        appendPaymentTable(curPayment)
        
        let tableDataList = document.querySelectorAll('#paymentTable tbody tr td')

        expect(tableDataList.length).toEqual(4)
        expect(tableDataList[0].innerText).toEqual('$100')
        expect(tableDataList[1].innerText).toEqual('$10')
        expect(tableDataList[2].innerText).toEqual('10%')
        expect(tableDataList[3].innerText).toEqual('X')

    })

    it('should create new payment on createCurPayment', function() {

        let newPayment = {
            billAmt: '100',
            tipAmt: '10',
            tipPercent: 10
        }

        expect(createCurPayment()).toEqual(newPayment)

    })

    it('should return undefined with negative or empty inputs', function() {
        
        billAmtInput.value = ''
        tipAmtInput.value = ''
        let curPayment = createCurPayment()

        expect(curPayment).toEqual(undefined)

    })

    afterEach(function() {
        billAmtInput.value = ''
        tipAmtInput.value = ''
        paymentTbody.innerHTML = ''
        summaryTds[0].innerHTML = ''
        summaryTds[1].innerHTML = ''
        summaryTds[2].innerHTML = ''
        serverTbody.innerHTML = ''
        paymentId = 0
        allPayments = {}

    })

})