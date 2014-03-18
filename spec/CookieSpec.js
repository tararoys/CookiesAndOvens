describe("Cookie", function() {
  var cookie;

  beforeEach(function() {
    cookie = new Cookie("Chocolate Chip");
  });

  it("should have a type", function() {
    expect(cookie.type).toEqual("chocolate chip");
  });

});
