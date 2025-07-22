from urllib.parse import urljoin

def populate_path(host, endpoint_path, **kwargs):
    """
    Replace placeholders in endpoint_path with kwargs and join with host.
    Example: endpoint_path='path/{puuid}' and kwargs={'puuid': 'abc'}
    Result: host/path/abc
    """
    path = endpoint_path.format(**kwargs)
    return urljoin(host, path)
