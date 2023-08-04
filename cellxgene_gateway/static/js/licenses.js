const licenses = [
    ["aniso8601", "https://pypi.org/project/aniso8601/", "Brandon Nielsen (2021)", ["BSD-3-Clause"], "https://bitbucket.org/nielsenb/aniso8601"],
    ["anndata", "https://pypi.org/project/anndata/", "P. Angerer, F. Alexander Wolf, Theis Lab (2017-2018)", ["BSD-3-Clause"], "https://github.com/scverse/anndata"],
    ["boto3", "https://pypi.org/project/boto3/", "Amazon.com, Inc. or its affiliates (2013-2017)", ["Apache-2.0"], "https://github.com/boto/boto3"],
    ["botocore", "https://pypi.org/project/botocore/", "Amazon.com, Inc. or its affiliates (2012-2022)", ["Apache-2.0"], "https://github.com/boto/botocore"],
    ["brotli", "https://pypi.org/project/Brotli/", "The Brotli authors (2009, 2010, 2013-2016)", ["MIT"], "https://github.com/google/brotli"],
    ["ca-certificates", "https://packages.debian.org/sid/ca-certificates", "Fumitoshi UKAI (2003); Philipp Kern (2009); Michael Shuler (2011); Various Debian Contributors", ["GNU GPL-2.0"], "https://salsa.debian.org/debian/ca-certificates"],
    ["cellxgene", "https://pypi.org/project/cellxgene/", "Chan Zuckerberg Initiative (2017-2023)", ["MIT"], "https://github.com/chanzuckerberg/cellxgene"],
    ["cellxgene-gateway", "https://pypi.org/project/cellxgene-gateway/", "Novartis Institutes for BioMedical Research Inc. (2019)", ["Apache-2.0"], "https://github.com/Novartis/cellxgene-gateway"],
    ["certifi", "https://pypi.org/project/certifi/", "Unspecified", ["MPL-2.0"], "https://github.com/certifi/python-certifi"],
    ["charset-normalizer", "https://pypi.org/project/charset-normalizer/", "TAHRI Ahmed R. (2019)", ["MIT"], "https://github.com/Ousret/charset_normalizer"],
    ["click", "https://pypi.org/project/click/", "Pallets (2014)", ["BSD-3-Clause"], "https://github.com/pallets/click/"],
    ["flask", "https://pypi.org/project/Flask/", "Pallets (2010)", ["BSD-3-Clause"], "https://github.com/pallets/flask/"],
    ["flask-api", "https://pypi.org/project/Flask-API/", "Tom Christie (2017)", ["BSD-2-Clause"], "https://github.com/flask-api/flask-api"],
    ["flask-compress", "https://pypi.org/project/Flask-Compress/", "William Fagan (2013-2017)", ["MIT"], "https://github.com/colour-science/flask-compress"],
    ["flask-cors", "https://pypi.org/project/Flask-Cors/", "Cory Dolphin, Olin College (2016)", ["MIT"], "https://github.com/corydolphin/flask-cors"],
    ["flask-restful", "https://pypi.org/project/Flask-RESTful/", "Twilio, Inc (2013)", ["BSD-3-Clause"], "https://github.com/flask-restful/flask-restful"],
    ["flask-server-timing", "https://pypi.org/project/flask-server-timing/", "Unspecified", ["Apache-2.0"], "https://github.com/rodrobin/flask-server-timing"],
    ["flask-talisman", "https://pypi.org/project/flask-talisman/", "Google Inc. (2015)", ["Apache-2.0"], "https://github.com/wntrblm/flask-talisman"],
    ["flatbuffers", "https://pypi.org/project/flatbuffers/", "Google Inc. (2014-)", ["Apache-2.0"], "https://github.com/google/flatbuffers"],
    ["flatten-dict", "https://pypi.org/project/flatten-dict/", "Ian Lin (2019)", ["MIT"], "https://github.com/ianlini/flatten-dict"],
    ["fsspec", "https://pypi.org/project/fsspec/", "Martin Durant (2018)", ["BSD-3-Clause"], "https://github.com/fsspec/filesystem_spec"],
    ["gunicorn", "https://pypi.org/project/gunicorn/", "Benoît Chesneau (2009-2023); Paul J. Davis (2009-2015)", ["MIT"], "https://github.com/benoitc/gunicorn"],
    ["h5py", "https://pypi.org/project/h5py/", "Andrew Collette and contributors (2008)", ["BSD-3-Clause"], "https://github.com/h5py/h5py"],
    ["idna", "https://pypi.org/project/idna/", "Kim Davies and contributors (2013-2022)", ["BSD-3-Clause"], "https://github.com/kjd/idna"],
    ["importlib-metadata", "https://pypi.org/project/importlib-metadata/", "Unspecified (removed; previously Jason R. Coombs, Barry Warsaw (2017-2019))", ["Apache-2.0"], "https://github.com/python/importlib_metadata"],
    ["itsdangerous", "https://pypi.org/project/itsdangerous/", "Pallets (2011)", ["BSD-3-Clause"], "https://github.com/pallets/itsdangerous/"],
    ["jinja2", "https://pypi.org/project/Jinja2/", "Pallets (2007)", ["BSD-3-Clause"], "https://github.com/pallets/jinja/"],
    ["jmespath", "https://pypi.org/project/jmespath/", "Amazon.com, Inc. or its affiliates (2013)", ["MIT"], "https://github.com/jmespath/jmespath.py"],
    ["libffi", "http://sourceware.org/libffi/", "Anthony Green, Red Hat, Inc and others (1996-2022)", ["MIT"], "https://github.com/libffi/libffi"],
    ["llvmlite", "https://pypi.org/project/llvmlite/", "Continuum Analytics, Inc (2014-)", ["BSD-2-Clause"], "https://github.com/numba/llvmlite"],
    ["markupsafe", "https://pypi.org/project/MarkupSafe/", "Pallets (2010)", ["BSD-3-Clause"], "https://github.com/pallets/markupsafe/"],
    ["natsort", "https://pypi.org/project/natsort/", "Seth M. Morton (2012-2023)", ["MIT"], "https://github.com/SethMMorton/natsort"],
    ["ncurses", "https://invisible-island.net/ncurses/", "Thomas E. Dickey (2018-2022, 2023); Free Software Foundation, Inc (1998-2017, 2018)", ["MIT", "X11"], "https://github.com/mirror/ncurses"],
    ["numba", "https://pypi.org/project/numba/", "Anaconda, Inc (2012)", ["BSD-2-Clause"], "https://github.com/numba/numba"],
    ["numpy", "https://pypi.org/project/numpy/", "NumPy Developers (2005-2023)", ["BSD-3-Clause"], "https://github.com/numpy/numpy"],
    ["openssl", "https://www.openssl.org/", "The OpenSSL Project Authors (1998-2023); Eric A. Young, Tim J. Hudson (1995-1998)", ["Apache-2.0"], "https://github.com/openssl/openssl"],
    ["packaging", "https://pypi.org/project/packaging/", "Donald Stufft and individual contributors (2014-2019)", ["Apache-2.0", "BSD-2-Clause"], "https://github.com/pypa/packaging"],
    ["pandas", "https://pypi.org/project/pandas/", "AQR Capital Management, LLC, Lambda Foundry, Inc. and PyData Development Team (2008-2011); Open source contributors (2011-2023)", ["BSD-3-Clause"], "https://github.com/pandas-dev/pandas"],
    ["pip", "https://pypi.org/project/pip/", "The pip developers (2008-)", ["MIT"], "https://github.com/pypa/pip"],
    ["psutil", "https://pypi.org/project/psutil/", "Jay Loden, Dave Daeschler, Giampaolo Rodola (2009)", ["BSD-3-Clause"], "https://github.com/giampaolo/psutil"],
    ["python", "https://www.python.org/", "Python Software Foundation (2001-)", ["PSF-2.0"], "https://github.com/python/cpython"],
    ["python-dateutil", "https://pypi.org/project/python-dateutil/", "Paul Ganssle (2017-); dateutil contributors (2017-)", ["Apache-2.0", "BSD-3-Clause"], "https://github.com/dateutil/dateutil"],
    ["pytz", "https://pypi.org/project/pytz/", "Stuart Bishop (2003-2019)", ["MIT"], "https://github.com/stub42/pytz"],
    ["pyyaml", "https://pypi.org/project/PyYAML/", "Ingy döt Net (2017-2021); Kirill Simonov (2006-2016)", ["MIT"], "https://github.com/yaml/pyyaml"],
    ["readline", "https://pypi.org/project/readline/", "Unspecified", ["GNU GPL-3.0"], "https://github.com/ludwigschwardt/python-gnureadline"],
    ["requests", "https://pypi.org/project/requests/", "Kenneth Reitz (2012-)", ["Apache-2.0"], "https://github.com/psf/requests"],
    ["s3fs", "https://pypi.org/project/s3fs/", "Continuum Analytics, Inc. and contributors (2016)", ["BSD-3-Clause"], "https://github.com/fsspec/s3fs"],
    ["s3transfer", "https://pypi.org/project/s3transfer/", "Amazon.com, Inc. or its affiliates (2016)", ["Apache-2.0"], "https://github.com/boto/s3transfer"],
    ["scipy", "https://pypi.org/project/scipy/", "Enthought, Inc (2001-2002); SciPy Developers (2003-2023)", ["BSD-3-Clause"], "https://github.com/scipy/scipy"],
    ["setuptools", "https://pypi.org/project/setuptools/", "Donald Stufft and individual contributors (2014-2019)", ["MIT"], "https://github.com/pypa/setuptools"],
    ["six", "https://pypi.org/project/six/", "Benjamin Peterson (2010-2020)", ["MIT"], "https://github.com/benjaminp/six"],
    ["sqlite", "https://sqlite.org/index.html", "None (public domain)", ["None (blessing)"], "https://sqlite.org/src/dir?ci=trunk"],
    ["tk", "https://www.tcl.tk/software/tcltk/", "Regents of the University of California, Sun Microsystems, Inc., Scriptics Corporation, and other parties", ["TCL"], "https://github.com/tcltk/tk"],
    ["typing-extensions", "https://pypi.org/project/typing-extensions/", "Python Software Foundation (2001-)", ["PSF-2.0"], "https://github.com/python/typing_extensions"],
    ["urllib3", "https://pypi.org/project/urllib3/", "Andrey Petrov and contributors (2008-2020)", ["MIT"], "https://github.com/urllib3/urllib3"],
    ["werkzeug", "https://github.com/pallets/werkzeug/", "Pallets (2007)", ["BSD-3-Clause"], "https://github.com/pallets/werkzeug/"],
    ["wheel", "https://pypi.org/project/wheel/", "Daniel Holth and contributors (2012)", ["MIT"], "https://github.com/pypa/wheel"],
    ["xz", "https://tukaani.org/xz/", "Various (maintainers are Lasse Collin and Jia Tan, other copyright notices from Free Software Foundation)", ["GNU GPL-2.0", "GNU LGPL-2.1"], "https://github.com/tukaani-project/xz"],
    ["zipp", "https://pypi.org/project/zipp/", "Unspecified (removed; previously Jason R. Coombs (no year given))", ["MIT"], "https://github.com/jaraco/zipp"],
    ["zlib", "https://www.zlib.net/", "Jean-loup Gailly and Mark Adler (1995-2022)", ["zlib"], "https://github.com/madler/zlib"],
    ];

const licenses_urls = [];
licenses_urls["BSD-2-Clause"] = "https://opensource.org/license/bsd-2-clause/";
licenses_urls["BSD-3-Clause"] = "https://opensource.org/license/bsd-3-clause/";
licenses_urls["MIT"] = "https://opensource.org/license/mit/";
licenses_urls["MPL-2.0"] = "https://www.mozilla.org/en-US/MPL/2.0/";
licenses_urls["Apache-2.0"] = "https://www.apache.org/licenses/LICENSE-2.0";
licenses_urls["X11"] = "https://spdx.org/licenses/X11.html";
licenses_urls["PSF-2.0"] = "https://opensource.org/license/python-2-0/";
licenses_urls["GNU GPL-2.0"] = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
licenses_urls["GNU GPL-3.0"] = "https://www.gnu.org/licenses/gpl-3.0.html";
licenses_urls["GNU LGPL-2.1"] = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html";
licenses_urls["TCL"] = "https://www.tcl.tk/software/tcltk/license.html";
licenses_urls["zlib"] = "https://opensource.org/license/zlib/";
licenses_urls["None (blessing)"] = "https://spdx.org/licenses/blessing.html";
licenses_urls["TBA"] = "TBA";
