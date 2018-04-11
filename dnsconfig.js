var OVH = NewDnsProvider('ovh','OVH');
var REG_OVH = NewRegistrar('ovh', 'OVH');

D("just-install.it", REG_OVH,
    DnsProvider(OVH),
    DefaultTTL(3599),
    A("@","104.198.14.52"),
    A("go","213.186.33.5"),
    TXT("go","1|https://stable.just-install.it"),
    CNAME("registry","just-install-registry.netlify.com"),
    CNAME("stable","just-install-stable.netlify.com"),
    CNAME("unstable","just-install-unstable.netlify.com")
);