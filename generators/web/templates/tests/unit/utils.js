const sinon = require( "sinon" );
const expect = require( "expect" );

exports.generateArgs = () => {
  /* Creates unique, fully isolated, instance of args 
   * Out: setup req, res
   */
  const sb = sinon.createSandbox(); // Unique instance

  const req = {
    flash: sb.spy(),
    body : {},
  };
  const res = {
    json: sb.spy(),
  };

  return { req, res };
};

exports.expectResJson = {
  success( res ) {
    expect( res.json.calledWith( { success: true } ) ).toBeTruthy( "expect success res.json" );
  },
  error( res ) {
    expect( res.json.calledWith( { error: true } ) ).toBeTruthy( "expect error res.json" );
  },
};
