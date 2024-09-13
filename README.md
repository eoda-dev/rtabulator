
<!-- README.md is generated from README.Rmd. Please edit that file -->

# rtabulator

<!-- badges: start -->

[![R-CMD-check](https://github.com/eodaGmbH/rtabulator/actions/workflows/R-CMD-check.yaml/badge.svg)](https://github.com/eodaGmbH/rtabulator/actions/workflows/R-CMD-check.yaml)
<!-- badges: end -->

The goal of rtabulator is to make it a breeze creating beautiful and
reactive tables using [Tabulator JS](https://tabulator.info/)

## Features

- Filters
- Grouping
- Multiple column formatters (images, html, progress bar, …)
- Multiple themes
- Multi column headers
- Spreadsheet mode supporting multiple sheets
- Cell editing supporting validation
- Downloads (json, csv, xlsx)
- Interactivity

## Installation

Once on CRAN you can install rtabulator with:

``` r
install.packages("rtabulator")
```

You can install the development version of rtabulator like so:

``` r
remotes::install_github("eodaGmbH/rtabulator")
```

## Basic Usage

``` r
library(rtabulator)

tabulator(mtcars)

# Set theme
tabulator(iris, theme = "midnight")

# Format columns
tabulator(airquality) |>
  set_formatter_progress(
    column = "Temp",
    legend = TRUE,
    legend_align = "left"
  )

# Spreadsheet mode
tabulator(data = list(), spreadsheet = TRUE)
```

## Documentation

[rtabulator docs](https://eodagmbh.github.io/rtabulator/)
