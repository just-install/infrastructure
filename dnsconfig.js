var OVH = NewDnsProvider('ovh','OVH');
var CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI');
var REG_NONE = NewRegistrar('none', 'NONE');

D("just-install.it", REG_NONE,
    DnsProvider(CLOUDFLARE, 0),
    DefaultTTL(3599),
    CF_PROXY_DEFAULT_OFF,
    A("@","104.198.14.52"),
    A("www","104.198.14.52"),
    A("go","213.186.33.5"),
    TXT("go","1|https://stable.just-install.it"),
    CNAME("registry","just-install-registry.netlify.com."),
    CNAME("stable","just-install-stable.netlify.com."),
    CNAME("unstable","just-install-unstable.netlify.com."),
    { no_ns: "true" }
);
