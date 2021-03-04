
it('should calculate the monthly rate correctly', function () {
  const testValues = {
    amount: 1000,
    years: 5,
    rate: .06
  }

  expect(calculateMonthlyPayment(testValues)).toEqual('19.33')
});


it("should return a result with 2 decimal places", function() {
  const testValues = {
    amount: 1000,
    years: 6,
    rate: .06
  }

  expect(calculateMonthlyPayment(testValues)).toEqual('16.57')
});

/// etc
