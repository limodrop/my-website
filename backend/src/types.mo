module {
  public type Region = {
    slug : Text;
    headline : Text;
    subheadline : Text;
    seoDescription : Text;
  };

  public type Country = {
    slug : Text;
    name : Text;
    tagline : Text;
    seoDescription : Text;
    primaryAirports : [Text];
  };

  public type City = {
    slug : Text;
    name : Text;
    country : Text;
    tagline : Text;
    seoDescription : Text;
    primaryUseCases : [Text];
  };

  public type Database = {
    regions : [Region];
    countries : [Country];
    cities : [City];
  };
}
