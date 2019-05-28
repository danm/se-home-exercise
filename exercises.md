# Tasks

## Readable dates (S)

Refactor the `date` and `firstPublished` data so it appears in the format of `1st Jan 2019, 01:00`

- Modify `_source.date` and `_source.firstPublished` in the `Articles/index.tsx` file
- Make your own function that recieves a `Date` input and returns a `string`
- The format should be `dS F Y, H:i`

## Readable numbers (S)

Refactor the `views` column so there are thousands separators in a British English format. For example, `1000000` becomes `1,000,000`

- Modify `_source.views` in the `Articles/index.tsx` file so it includes thousands separators

## Filter articles (L)

Add the functionality to filter the articles list by `siteName`. This will allow us to segment the list showing only sport, news or all data.

- Add a Select menu to the Article page with three options; Sport, News, All.
- When you change the select, the table should be filtered to that choice
- The default choice is All

## Aggregate article data (M)

Refactor the table data so it aggregates the `cpsid`. This means all entries of a unique `cpsid` will be a calculated total, giving us the ability to see how many times an article was read.

- Modify the `Articles` page so that it shows a `total page views` for each article
- Group together all entries from r1 and r2 data sources by the CPS id and sum together `views`

Note, the cpsid is the cononical ID for a single BBC article.

## Sort the article data (M)

Add functionality to sort the `Articles` table by clicking on a table header,
so that we can see the both the top articles, and the lowest, but also order things by their published date.

- Make the table header clickable
- When you click on a column header, it will reorganise the order of the data based on what header you clicked.
- The first click should sort the items in an accessending order
- The second click should sort the items in a descending order
