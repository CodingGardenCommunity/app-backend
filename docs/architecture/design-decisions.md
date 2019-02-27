# Design Decisions

## Versioning

To still have backwards compatability with breaking changes the API will serve
multiple major versions at the same time during a transition period.

The versioning will be implemented using a custom HTTP header in the request.
The API will check if the header `X-API-VERSION` is set. If it is it will
process the request based on the desired version. If it is empty or not set it
will default to the latest version.

## Compatability with all clients

### Blocked HTTP methods

When clients are behind a firewall or use a proxy server it could happen, that
requests the client generates are modified. A proxy server could for example
only allow `GET` and `POST` requests and discard any `PUT`, `DELETE`, or other
HTTP methods.

> The API should be able to operate on `GET` and `POST` alone. If the client is
> not able to make a `PUT`, `DELETE`, etc. request it will use a `POST` request
> with an additional HTTP header `X-HTTP-Method-Override` and a value of
> whichever method originally failed.

### Blocked custom headers

In other cases any HTTP request header that is not listed in the [HTTP/1.1
specifications](https://tools.ietf.org/html/rfc2616) might be blocked by a
firewall or proxy server.

This will make versioning using a custom headers (e.g. `X-API-Version`) or the
method described above to circumvent blocked HTTP methods impossible. To keep
things simple the API will not implement any measure to avoid this issue. This
decision is also based on the experience that not many clients will have blocked
HTTP headers.

> If a client is unable to recieve and/or send custom HTTP headers the client
> will not be able to use any special features like using a specific API
> version.