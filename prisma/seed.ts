import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
const prisma = new PrismaClient()

async function main() {
  await prisma.country.createMany({
    data: [
      {
        id: 1,
        name: 'Bonaire, Sint Eustatius and Saba',
        iso2: 'BQ',
        iso3: 'BES',
        continent: null,
      },
      {
        id: 2,
        name: 'Curaçao',
        iso2: 'CW',
        iso3: 'CUW',
        continent: null,
      },
      {
        id: 3,
        name: 'Guernsey',
        iso2: 'GG',
        iso3: 'GGY',
        continent: null,
      },
      {
        id: 4,
        name: 'Isle of Man',
        iso2: 'IM',
        iso3: 'IMN',
        continent: null,
      },
      {
        id: 5,
        name: 'Jersey',
        iso2: 'JE',
        iso3: 'JEY',
        continent: null,
      },
      {
        id: 6,
        name: 'Åland Islands',
        iso2: 'AX',
        iso3: 'ALA',
        continent: null,
      },
      {
        id: 7,
        name: 'Montenegro',
        iso2: 'ME',
        iso3: 'MNE',
        continent: null,
      },
      {
        id: 8,
        name: 'Saint Barthélemy',
        iso2: 'BL',
        iso3: 'BLM',
        continent: null,
      },
      {
        id: 9,
        name: 'Saint Martin (French part)',
        iso2: 'MF',
        iso3: 'MAF',
        continent: null,
      },
      {
        id: 10,
        name: 'Serbia',
        iso2: 'RS',
        iso3: 'SRB',
        continent: null,
      },
      {
        id: 11,
        name: 'Sint Maarten (Dutch part)',
        iso2: 'SX',
        iso3: 'SXM',
        continent: null,
      },
      {
        id: 12,
        name: 'South Sudan',
        iso2: 'SS',
        iso3: 'SSD',
        continent: null,
      },
      {
        id: 13,
        name: 'Timor-Leste',
        iso2: 'TL',
        iso3: 'TLS',
        continent: null,
      },
      {
        id: 14,
        name: 'American Samoa',
        iso2: 'as',
        iso3: 'ASM',
        continent: 'Oceania',
      },
      {
        id: 15,
        name: 'Andorra',
        iso2: 'AD',
        iso3: 'AND',
        continent: 'Europe',
      },
      {
        id: 16,
        name: 'Angola',
        iso2: 'AO',
        iso3: 'AGO',
        continent: 'Africa',
      },
      {
        id: 17,
        name: 'Anguilla',
        iso2: 'AI',
        iso3: 'AIA',
        continent: 'NorthAmerica',
      },
      {
        id: 18,
        name: 'Antarctica',
        iso2: 'AQ',
        iso3: 'ATA',
        continent: 'Antarctica',
      },
      {
        id: 19,
        name: 'Antigua and Barbuda',
        iso2: 'AG',
        iso3: 'ATG',
        continent: 'NorthAmerica',
      },
      {
        id: 20,
        name: 'Argentina',
        iso2: 'AR',
        iso3: 'ARG',
        continent: 'SouthAmerica',
      },
      {
        id: 21,
        name: 'Armenia',
        iso2: 'AM',
        iso3: 'ARM',
        continent: 'Asia',
      },
      {
        id: 22,
        name: 'Aruba',
        iso2: 'AW',
        iso3: 'ABW',
        continent: 'NorthAmerica',
      },
      {
        id: 23,
        name: 'Australia',
        iso2: 'AU',
        iso3: 'AUS',
        continent: 'Oceania',
      },
      {
        id: 24,
        name: 'Austria',
        iso2: 'AT',
        iso3: 'AUT',
        continent: 'Europe',
      },
      {
        id: 25,
        name: 'Azerbaijan',
        iso2: 'AZ',
        iso3: 'AZE',
        continent: 'Asia',
      },
      {
        id: 26,
        name: 'Bahamas',
        iso2: 'BS',
        iso3: 'BHS',
        continent: 'NorthAmerica',
      },
      {
        id: 27,
        name: 'Bahrain',
        iso2: 'BH',
        iso3: 'BHR',
        continent: 'Asia',
      },
      {
        id: 28,
        name: 'Bangladesh',
        iso2: 'BD',
        iso3: 'BGD',
        continent: 'Asia',
      },
      {
        id: 29,
        name: 'Barbados',
        iso2: 'BB',
        iso3: 'BRB',
        continent: 'NorthAmerica',
      },
      {
        id: 30,
        name: 'Belarus',
        iso2: 'BY',
        iso3: 'BLR',
        continent: 'Europe',
      },
      {
        id: 31,
        name: 'Belgium',
        iso2: 'BE',
        iso3: 'BEL',
        continent: 'Europe',
      },
      {
        id: 32,
        name: 'Belize',
        iso2: 'BZ',
        iso3: 'BLZ',
        continent: 'NorthAmerica',
      },
      {
        id: 33,
        name: 'Benin',
        iso2: 'BJ',
        iso3: 'BEN',
        continent: 'Africa',
      },
      {
        id: 34,
        name: 'Bermuda',
        iso2: 'BM',
        iso3: 'BMU',
        continent: 'NorthAmerica',
      },
      {
        id: 35,
        name: 'Bhutan',
        iso2: 'BT',
        iso3: 'BTN',
        continent: 'Asia',
      },
      {
        id: 36,
        name: 'Bolivia',
        iso2: 'BO',
        iso3: 'BOL',
        continent: 'SouthAmerica',
      },
      {
        id: 37,
        name: 'Bosnia and Herzegovina',
        iso2: 'BA',
        iso3: 'BIH',
        continent: 'Europe',
      },
      {
        id: 38,
        name: 'Botswana',
        iso2: 'BW',
        iso3: 'BWA',
        continent: 'Africa',
      },
      {
        id: 39,
        name: 'Bouvet Island',
        iso2: 'BV',
        iso3: 'BVT',
        continent: 'Antarctica',
      },
      {
        id: 40,
        name: 'Brazil',
        iso2: 'BR',
        iso3: 'BRA',
        continent: 'SouthAmerica',
      },
      {
        id: 41,
        name: 'British Indian Ocean Territory',
        iso2: 'IO',
        iso3: 'IOT',
        continent: 'Africa',
      },
      {
        id: 42,
        name: 'Brunei Darussalam',
        iso2: 'BN',
        iso3: 'BRN',
        continent: 'Asia',
      },
      {
        id: 43,
        name: 'Bulgaria',
        iso2: 'BG',
        iso3: 'BGR',
        continent: 'Europe',
      },
      {
        id: 44,
        name: 'Burkina Faso',
        iso2: 'BF',
        iso3: 'BFA',
        continent: 'Africa',
      },
      {
        id: 45,
        name: 'Burundi',
        iso2: 'BI',
        iso3: 'BDI',
        continent: 'Africa',
      },
      {
        id: 46,
        name: 'Cambodia',
        iso2: 'KH',
        iso3: 'KHM',
        continent: 'Asia',
      },
      {
        id: 47,
        name: 'Cameroon',
        iso2: 'CM',
        iso3: 'CMR',
        continent: 'Africa',
      },
      {
        id: 48,
        name: 'Canada',
        iso2: 'CA',
        iso3: 'CAN',
        continent: 'NorthAmerica',
      },
      {
        id: 49,
        name: 'Cape Verde',
        iso2: 'CV',
        iso3: 'CPV',
        continent: 'Africa',
      },
      {
        id: 50,
        name: 'Cayman Islands',
        iso2: 'KY',
        iso3: 'CYM',
        continent: 'NorthAmerica',
      },
      {
        id: 51,
        name: 'Central African Republic',
        iso2: 'CF',
        iso3: 'CAF',
        continent: 'Africa',
      },
      {
        id: 52,
        name: 'Chad',
        iso2: 'TD',
        iso3: 'TCD',
        continent: 'Africa',
      },
      {
        id: 53,
        name: 'Chile',
        iso2: 'CL',
        iso3: 'CHL',
        continent: 'SouthAmerica',
      },
      {
        id: 54,
        name: 'China',
        iso2: 'CN',
        iso3: 'CHN',
        continent: 'Asia',
      },
      {
        id: 55,
        name: 'Christmas Island',
        iso2: 'CX',
        iso3: 'CXR',
        continent: 'Oceania',
      },
      {
        id: 56,
        name: 'Cocos (Keeling) Islands',
        iso2: 'CC',
        iso3: 'CCK',
        continent: 'Oceania',
      },
      {
        id: 57,
        name: 'Colombia',
        iso2: 'CO',
        iso3: 'COL',
        continent: 'SouthAmerica',
      },
      {
        id: 58,
        name: 'Comoros',
        iso2: 'KM',
        iso3: 'COM',
        continent: 'Africa',
      },
      {
        id: 59,
        name: 'Congo',
        iso2: 'CG',
        iso3: 'COG',
        continent: 'Africa',
      },
      {
        id: 60,
        name: 'Congo, the Democratic Republic of the',
        iso2: 'CD',
        iso3: 'COD',
        continent: 'Africa',
      },
      {
        id: 61,
        name: 'Cook Islands',
        iso2: 'CK',
        iso3: 'COK',
        continent: 'Oceania',
      },
      {
        id: 62,
        name: 'Costa Rica',
        iso2: 'CR',
        iso3: 'CRI',
        continent: 'NorthAmerica',
      },
      {
        id: 63,
        name: 'Cote DIvoire',
        iso2: 'CI',
        iso3: 'CIV',
        continent: 'Africa',
      },
      {
        id: 64,
        name: 'Croatia',
        iso2: 'HR',
        iso3: 'HRV',
        continent: 'Europe',
      },
      {
        id: 65,
        name: 'Cuba',
        iso2: 'CU',
        iso3: 'CUB',
        continent: 'NorthAmerica',
      },
      {
        id: 66,
        name: 'Cyprus',
        iso2: 'CY',
        iso3: 'CYP',
        continent: 'Asia',
      },
      {
        id: 67,
        name: 'Czech Republic',
        iso2: 'CZ',
        iso3: 'CZE',
        continent: 'Europe',
      },
      {
        id: 68,
        name: 'Denmark',
        iso2: 'DK',
        iso3: 'DNK',
        continent: 'Europe',
      },
      {
        id: 69,
        name: 'Djibouti',
        iso2: 'DJ',
        iso3: 'DJI',
        continent: 'Africa',
      },
      {
        id: 70,
        name: 'Dominica',
        iso2: 'DM',
        iso3: 'DMA',
        continent: 'NorthAmerica',
      },
      {
        id: 71,
        name: 'Dominican Republic',
        iso2: 'DO',
        iso3: 'DOM',
        continent: 'NorthAmerica',
      },
      {
        id: 72,
        name: 'Ecuador',
        iso2: 'EC',
        iso3: 'ECU',
        continent: 'SouthAmerica',
      },
      {
        id: 73,
        name: 'Egypt',
        iso2: 'EG',
        iso3: 'EGY',
        continent: 'Africa',
      },
      {
        id: 74,
        name: 'El Salvador',
        iso2: 'SV',
        iso3: 'SLV',
        continent: 'NorthAmerica',
      },
      {
        id: 75,
        name: 'Equatorial Guinea',
        iso2: 'GQ',
        iso3: 'GNQ',
        continent: 'Africa',
      },
      {
        id: 76,
        name: 'Eritrea',
        iso2: 'ER',
        iso3: 'ERI',
        continent: 'Africa',
      },
      {
        id: 77,
        name: 'Estonia',
        iso2: 'EE',
        iso3: 'EST',
        continent: 'Europe',
      },
      {
        id: 78,
        name: 'Ethiopia',
        iso2: 'ET',
        iso3: 'ETH',
        continent: 'Africa',
      },
      {
        id: 79,
        name: 'Falkland Islands (Malvinas)',
        iso2: 'FK',
        iso3: 'FLK',
        continent: 'SouthAmerica',
      },
      {
        id: 80,
        name: 'Faroe Islands',
        iso2: 'FO',
        iso3: 'FRO',
        continent: 'Europe',
      },
      {
        id: 81,
        name: 'Fiji',
        iso2: 'FJ',
        iso3: 'FJI',
        continent: 'Oceania',
      },
      {
        id: 82,
        name: 'Finland',
        iso2: 'FI',
        iso3: 'FIN',
        continent: 'Europe',
      },
      {
        id: 83,
        name: 'France',
        iso2: 'FR',
        iso3: 'FRA',
        continent: 'Europe',
      },
      {
        id: 84,
        name: 'French Guiana',
        iso2: 'GF',
        iso3: 'GUF',
        continent: 'SouthAmerica',
      },
      {
        id: 85,
        name: 'French Polynesia',
        iso2: 'PF',
        iso3: 'PYF',
        continent: 'Oceania',
      },
      {
        id: 86,
        name: 'French Southern Territories',
        iso2: 'TF',
        iso3: 'ATF',
        continent: 'Antarctica',
      },
      {
        id: 87,
        name: 'Gabon',
        iso2: 'GA',
        iso3: 'GAB',
        continent: 'Africa',
      },
      {
        id: 88,
        name: 'Gambia',
        iso2: 'GM',
        iso3: 'GMB',
        continent: 'Africa',
      },
      {
        id: 89,
        name: 'Georgia',
        iso2: 'GE',
        iso3: 'GEO',
        continent: 'Asia',
      },
      {
        id: 90,
        name: 'Germany',
        iso2: 'DE',
        iso3: 'DEU',
        continent: 'Europe',
      },
      {
        id: 91,
        name: 'Ghana',
        iso2: 'GH',
        iso3: 'GHA',
        continent: 'Africa',
      },
      {
        id: 92,
        name: 'Gibraltar',
        iso2: 'GI',
        iso3: 'GIB',
        continent: 'Europe',
      },
      {
        id: 93,
        name: 'Greece',
        iso2: 'GR',
        iso3: 'GRC',
        continent: 'Europe',
      },
      {
        id: 94,
        name: 'Greenland',
        iso2: 'GL',
        iso3: 'GRL',
        continent: 'NorthAmerica',
      },
      {
        id: 95,
        name: 'Grenada',
        iso2: 'GD',
        iso3: 'GRD',
        continent: 'NorthAmerica',
      },
      {
        id: 96,
        name: 'Guadeloupe',
        iso2: 'GP',
        iso3: 'GLP',
        continent: 'NorthAmerica',
      },
      {
        id: 97,
        name: 'Guam',
        iso2: 'GU',
        iso3: 'GUM',
        continent: 'Oceania',
      },
      {
        id: 98,
        name: 'Guatemala',
        iso2: 'GT',
        iso3: 'GTM',
        continent: 'NorthAmerica',
      },
      {
        id: 99,
        name: 'Guinea',
        iso2: 'GN',
        iso3: 'GIN',
        continent: 'Africa',
      },
      {
        id: 100,
        name: 'Guinea-Bissau',
        iso2: 'GW',
        iso3: 'GNB',
        continent: 'Africa',
      },
      {
        id: 101,
        name: 'Guyana',
        iso2: 'GY',
        iso3: 'GUY',
        continent: 'SouthAmerica',
      },
      {
        id: 102,
        name: 'Haiti',
        iso2: 'HT',
        iso3: 'HTI',
        continent: 'NorthAmerica',
      },
      {
        id: 103,
        name: 'Heard Island and Mcdonald Islands',
        iso2: 'HM',
        iso3: 'HMD',
        continent: 'Antarctica',
      },
      {
        id: 104,
        name: 'Holy See (Vatican City State)',
        iso2: 'VA',
        iso3: 'VAT',
        continent: 'Europe',
      },
      {
        id: 105,
        name: 'Honduras',
        iso2: 'HN',
        iso3: 'HND',
        continent: 'NorthAmerica',
      },
      {
        id: 106,
        name: 'Hong Kong',
        iso2: 'HK',
        iso3: 'HKG',
        continent: 'Asia',
      },
      {
        id: 107,
        name: 'Hungary',
        iso2: 'HU',
        iso3: 'HUN',
        continent: 'Europe',
      },
      {
        id: 108,
        name: 'Iceland',
        iso2: 'IS',
        iso3: 'ISL',
        continent: 'Europe',
      },
      {
        id: 109,
        name: 'India',
        iso2: 'IN',
        iso3: 'IND',
        continent: 'Asia',
      },
      {
        id: 110,
        name: 'Indonesia',
        iso2: 'ID',
        iso3: 'IDN',
        continent: 'Asia',
      },
      {
        id: 111,
        name: 'Iran, Islamic Republic of',
        iso2: 'IR',
        iso3: 'IRN',
        continent: 'Asia',
      },
      {
        id: 112,
        name: 'Iraq',
        iso2: 'IQ',
        iso3: 'IRQ',
        continent: 'Asia',
      },
      {
        id: 113,
        name: 'Ireland',
        iso2: 'IE',
        iso3: 'IRL',
        continent: 'Europe',
      },
      {
        id: 114,
        name: 'Israel',
        iso2: 'IL',
        iso3: 'ISR',
        continent: 'Asia',
      },
      {
        id: 115,
        name: 'Italy',
        iso2: 'IT',
        iso3: 'ITA',
        continent: 'Europe',
      },
      {
        id: 116,
        name: 'Jamaica',
        iso2: 'JM',
        iso3: 'JAM',
        continent: 'NorthAmerica',
      },
      {
        id: 117,
        name: 'Japan',
        iso2: 'JP',
        iso3: 'JPN',
        continent: 'Asia',
      },
      {
        id: 118,
        name: 'Jordan',
        iso2: 'JO',
        iso3: 'JOR',
        continent: 'Asia',
      },
      {
        id: 119,
        name: 'Kazakhstan',
        iso2: 'KZ',
        iso3: 'KAZ',
        continent: 'Asia',
      },
      {
        id: 120,
        name: 'Kenya',
        iso2: 'KE',
        iso3: 'KEN',
        continent: 'Africa',
      },
      {
        id: 121,
        name: 'Kiribati',
        iso2: 'KI',
        iso3: 'KIR',
        continent: 'Oceania',
      },
      {
        id: 122,
        name: "Korea, Democratic People's Republic of",
        iso2: 'KP',
        iso3: 'PRK',
        continent: 'Asia',
      },
      {
        id: 123,
        name: 'Korea, Republic of',
        iso2: 'KR',
        iso3: 'KOR',
        continent: 'Asia',
      },
      {
        id: 124,
        name: 'Kuwait',
        iso2: 'KW',
        iso3: 'KWT',
        continent: 'Asia',
      },
      {
        id: 125,
        name: 'Kyrgyzstan',
        iso2: 'KG',
        iso3: 'KGZ',
        continent: 'Asia',
      },
      {
        id: 126,
        name: "Lao People's Democratic Republic",
        iso2: 'LA',
        iso3: 'LAO',
        continent: 'Asia',
      },
      {
        id: 127,
        name: 'Latvia',
        iso2: 'LV',
        iso3: 'LVA',
        continent: 'Europe',
      },
      {
        id: 128,
        name: 'Lebanon',
        iso2: 'LB',
        iso3: 'LBN',
        continent: 'Asia',
      },
      {
        id: 129,
        name: 'Lesotho',
        iso2: 'LS',
        iso3: 'LSO',
        continent: 'Africa',
      },
      {
        id: 130,
        name: 'Liberia',
        iso2: 'LR',
        iso3: 'LBR',
        continent: 'Africa',
      },
      {
        id: 131,
        name: 'Libya',
        iso2: 'LY',
        iso3: 'LBY',
        continent: 'Africa',
      },
      {
        id: 132,
        name: 'Liechtenstein',
        iso2: 'LI',
        iso3: 'LIE',
        continent: 'Europe',
      },
      {
        id: 133,
        name: 'Lithuania',
        iso2: 'LT',
        iso3: 'LTU',
        continent: 'Europe',
      },
      {
        id: 134,
        name: 'Luxembourg',
        iso2: 'LU',
        iso3: 'LUX',
        continent: 'Europe',
      },
      {
        id: 135,
        name: 'Macao',
        iso2: 'MO',
        iso3: 'MAC',
        continent: 'Asia',
      },
      {
        id: 136,
        name: 'Macedonia, the Former Yugoslav Republic of',
        iso2: 'MK',
        iso3: 'MKD',
        continent: 'Europe',
      },
      {
        id: 137,
        name: 'Madagascar',
        iso2: 'MG',
        iso3: 'MDG',
        continent: 'Africa',
      },
      {
        id: 138,
        name: 'Malawi',
        iso2: 'MW',
        iso3: 'MWI',
        continent: 'Africa',
      },
      {
        id: 139,
        name: 'Malaysia',
        iso2: 'MY',
        iso3: 'MYS',
        continent: 'Asia',
      },
      {
        id: 140,
        name: 'Maldives',
        iso2: 'MV',
        iso3: 'MDV',
        continent: 'Asia',
      },
      {
        id: 141,
        name: 'Mali',
        iso2: 'ML',
        iso3: 'MLI',
        continent: 'Africa',
      },
      {
        id: 142,
        name: 'Malta',
        iso2: 'MT',
        iso3: 'MLT',
        continent: 'Europe',
      },
      {
        id: 143,
        name: 'Marshall Islands',
        iso2: 'MH',
        iso3: 'MHL',
        continent: 'Oceania',
      },
      {
        id: 144,
        name: 'Martinique',
        iso2: 'MQ',
        iso3: 'MTQ',
        continent: 'NorthAmerica',
      },
      {
        id: 145,
        name: 'Mauritania',
        iso2: 'MR',
        iso3: 'MRT',
        continent: 'Africa',
      },
      {
        id: 146,
        name: 'Mauritius',
        iso2: 'MU',
        iso3: 'MUS',
        continent: 'Africa',
      },
      {
        id: 147,
        name: 'Mayotte',
        iso2: 'YT',
        iso3: 'MYT',
        continent: 'Africa',
      },
      {
        id: 148,
        name: 'Mexico',
        iso2: 'MX',
        iso3: 'MEX',
        continent: 'NorthAmerica',
      },
      {
        id: 149,
        name: 'Micronesia, Federated States of',
        iso2: 'FM',
        iso3: 'FSM',
        continent: 'Oceania',
      },
      {
        id: 150,
        name: 'Moldova, Republic of',
        iso2: 'MD',
        iso3: 'MDA',
        continent: 'Europe',
      },
      {
        id: 151,
        name: 'Monaco',
        iso2: 'MC',
        iso3: 'MCO',
        continent: 'Europe',
      },
      {
        id: 152,
        name: 'Mongolia',
        iso2: 'MN',
        iso3: 'MNG',
        continent: 'Asia',
      },
      {
        id: 153,
        name: 'Albania',
        iso2: 'AL',
        iso3: 'ALB',
        continent: 'Europe',
      },
      {
        id: 154,
        name: 'Montserrat',
        iso2: 'MS',
        iso3: 'MSR',
        continent: 'NorthAmerica',
      },
      {
        id: 155,
        name: 'Morocco',
        iso2: 'MA',
        iso3: 'MAR',
        continent: 'Africa',
      },
      {
        id: 156,
        name: 'Mozambique',
        iso2: 'MZ',
        iso3: 'MOZ',
        continent: 'Africa',
      },
      {
        id: 157,
        name: 'Myanmar',
        iso2: 'MM',
        iso3: 'MMR',
        continent: 'Asia',
      },
      {
        id: 158,
        name: 'Namibia',
        iso2: 'NA',
        iso3: 'NAM',
        continent: 'Africa',
      },
      {
        id: 159,
        name: 'Nauru',
        iso2: 'NR',
        iso3: 'NRU',
        continent: 'Oceania',
      },
      {
        id: 160,
        name: 'Nepal',
        iso2: 'NP',
        iso3: 'NPL',
        continent: 'Asia',
      },
      {
        id: 161,
        name: 'Netherlands',
        iso2: 'NL',
        iso3: 'NLD',
        continent: 'Europe',
      },
      {
        id: 162,
        name: 'New Caledonia',
        iso2: 'NC',
        iso3: 'NCL',
        continent: 'Oceania',
      },
      {
        id: 163,
        name: 'New Zealand',
        iso2: 'NZ',
        iso3: 'NZL',
        continent: 'Oceania',
      },
      {
        id: 164,
        name: 'Nicaragua',
        iso2: 'NI',
        iso3: 'NIC',
        continent: 'NorthAmerica',
      },
      {
        id: 165,
        name: 'Niger',
        iso2: 'NE',
        iso3: 'NER',
        continent: 'Africa',
      },
      {
        id: 166,
        name: 'Nigeria',
        iso2: 'NG',
        iso3: 'NGA',
        continent: 'Africa',
      },
      {
        id: 167,
        name: 'Niue',
        iso2: 'NU',
        iso3: 'NIU',
        continent: 'Oceania',
      },
      {
        id: 168,
        name: 'Norfolk Island',
        iso2: 'NF',
        iso3: 'NFK',
        continent: 'Oceania',
      },
      {
        id: 169,
        name: 'Northern Mariana Islands',
        iso2: 'MP',
        iso3: 'MNP',
        continent: 'Oceania',
      },
      {
        id: 170,
        name: 'Norway',
        iso2: 'NO',
        iso3: 'NOR',
        continent: 'Europe',
      },
      {
        id: 171,
        name: 'Oman',
        iso2: 'OM',
        iso3: 'OMN',
        continent: 'Asia',
      },
      {
        id: 172,
        name: 'Pakistan',
        iso2: 'PK',
        iso3: 'PAK',
        continent: 'Asia',
      },
      {
        id: 173,
        name: 'Palau',
        iso2: 'PW',
        iso3: 'PLW',
        continent: 'Oceania',
      },
      {
        id: 174,
        name: 'Palestine, State of',
        iso2: 'PS',
        iso3: 'PSE',
        continent: 'Asia',
      },
      {
        id: 175,
        name: 'Panama',
        iso2: 'PA',
        iso3: 'PAN',
        continent: 'NorthAmerica',
      },
      {
        id: 176,
        name: 'Papua New Guinea',
        iso2: 'PG',
        iso3: 'PNG',
        continent: 'Oceania',
      },
      {
        id: 177,
        name: 'Paraguay',
        iso2: 'PY',
        iso3: 'PRY',
        continent: 'SouthAmerica',
      },
      {
        id: 178,
        name: 'Peru',
        iso2: 'PE',
        iso3: 'PER',
        continent: 'SouthAmerica',
      },
      {
        id: 179,
        name: 'Philippines',
        iso2: 'PH',
        iso3: 'PHL',
        continent: 'Asia',
      },
      {
        id: 180,
        name: 'Pitcairn',
        iso2: 'PN',
        iso3: 'PCN',
        continent: 'Oceania',
      },
      {
        id: 181,
        name: 'Poland',
        iso2: 'PL',
        iso3: 'POL',
        continent: 'Europe',
      },
      {
        id: 182,
        name: 'Portugal',
        iso2: 'PT',
        iso3: 'PRT',
        continent: 'Europe',
      },
      {
        id: 183,
        name: 'Puerto Rico',
        iso2: 'PR',
        iso3: 'PRI',
        continent: 'NorthAmerica',
      },
      {
        id: 184,
        name: 'Qatar',
        iso2: 'QA',
        iso3: 'QAT',
        continent: 'Asia',
      },
      {
        id: 185,
        name: 'Reunion',
        iso2: 'RE',
        iso3: 'REU',
        continent: 'Africa',
      },
      {
        id: 186,
        name: 'Romania',
        iso2: 'RO',
        iso3: 'ROM',
        continent: 'Europe',
      },
      {
        id: 187,
        name: 'Russian Federation',
        iso2: 'RU',
        iso3: 'RUS',
        continent: 'Europe',
      },
      {
        id: 188,
        name: 'Rwanda',
        iso2: 'RW',
        iso3: 'RWA',
        continent: 'Africa',
      },
      {
        id: 189,
        name: 'Saint Helena, Ascension and Tristan da Cunha',
        iso2: 'SH',
        iso3: 'SHN',
        continent: 'Africa',
      },
      {
        id: 190,
        name: 'Saint Kitts and Nevis',
        iso2: 'KN',
        iso3: 'KNA',
        continent: 'NorthAmerica',
      },
      {
        id: 191,
        name: 'Saint Lucia',
        iso2: 'LC',
        iso3: 'LCA',
        continent: 'NorthAmerica',
      },
      {
        id: 192,
        name: 'Saint Pierre and Miquelon',
        iso2: 'PM',
        iso3: 'SPM',
        continent: 'NorthAmerica',
      },
      {
        id: 193,
        name: 'Saint Vincent and the Grenadines',
        iso2: 'VC',
        iso3: 'VCT',
        continent: 'NorthAmerica',
      },
      {
        id: 194,
        name: 'Samoa',
        iso2: 'WS',
        iso3: 'WSM',
        continent: 'Oceania',
      },
      {
        id: 195,
        name: 'San Marino',
        iso2: 'SM',
        iso3: 'SMR',
        continent: 'Europe',
      },
      {
        id: 196,
        name: 'Sao Tome and Principe',
        iso2: 'ST',
        iso3: 'STP',
        continent: 'Africa',
      },
      {
        id: 197,
        name: 'Saudi Arabia',
        iso2: 'SA',
        iso3: 'SAU',
        continent: 'Asia',
      },
      {
        id: 198,
        name: 'Senegal',
        iso2: 'SN',
        iso3: 'SEN',
        continent: 'Africa',
      },
      {
        id: 199,
        name: 'Seychelles',
        iso2: 'SC',
        iso3: 'SYC',
        continent: 'Africa',
      },
      {
        id: 200,
        name: 'Sierra Leone',
        iso2: 'SL',
        iso3: 'SLE',
        continent: 'Africa',
      },
      {
        id: 201,
        name: 'Singapore',
        iso2: 'SG',
        iso3: 'SGP',
        continent: 'Asia',
      },
      {
        id: 202,
        name: 'Slovakia',
        iso2: 'SK',
        iso3: 'SVK',
        continent: 'Europe',
      },
      {
        id: 203,
        name: 'Slovenia',
        iso2: 'SI',
        iso3: 'SVN',
        continent: 'Europe',
      },
      {
        id: 204,
        name: 'Solomon Islands',
        iso2: 'SB',
        iso3: 'SLB',
        continent: 'Oceania',
      },
      {
        id: 205,
        name: 'Somalia',
        iso2: 'SO',
        iso3: 'SOM',
        continent: 'Africa',
      },
      {
        id: 206,
        name: 'South Africa',
        iso2: 'ZA',
        iso3: 'ZAF',
        continent: 'Africa',
      },
      {
        id: 207,
        name: 'South Georgia and the South Sandwich Islands',
        iso2: 'GS',
        iso3: 'SGS',
        continent: 'Antarctica',
      },
      {
        id: 208,
        name: 'Spain',
        iso2: 'ES',
        iso3: 'ESP',
        continent: 'Europe',
      },
      {
        id: 209,
        name: 'Sri Lanka',
        iso2: 'LK',
        iso3: 'LKA',
        continent: 'Asia',
      },
      {
        id: 210,
        name: 'Sudan',
        iso2: 'SD',
        iso3: 'SDN',
        continent: 'Africa',
      },
      {
        id: 211,
        name: 'Suriname',
        iso2: 'SR',
        iso3: 'SUR',
        continent: 'SouthAmerica',
      },
      {
        id: 212,
        name: 'Svalbard and Jan Mayen',
        iso2: 'SJ',
        iso3: 'SJM',
        continent: 'Europe',
      },
      {
        id: 213,
        name: 'Swaziland',
        iso2: 'SZ',
        iso3: 'SWZ',
        continent: 'Africa',
      },
      {
        id: 214,
        name: 'Sweden',
        iso2: 'SE',
        iso3: 'SWE',
        continent: 'Europe',
      },
      {
        id: 215,
        name: 'Switzerland',
        iso2: 'CH',
        iso3: 'CHE',
        continent: 'Europe',
      },
      {
        id: 216,
        name: 'Syrian Arab Republic',
        iso2: 'SY',
        iso3: 'SYR',
        continent: 'Asia',
      },
      {
        id: 217,
        name: 'Taiwan (Province of China)',
        iso2: 'TW',
        iso3: 'TWN',
        continent: 'Asia',
      },
      {
        id: 218,
        name: 'Tajikistan',
        iso2: 'TJ',
        iso3: 'TJK',
        continent: 'Asia',
      },
      {
        id: 219,
        name: 'Tanzania, United Republic of',
        iso2: 'TZ',
        iso3: 'TZA',
        continent: 'Africa',
      },
      {
        id: 220,
        name: 'Thailand',
        iso2: 'TH',
        iso3: 'THA',
        continent: 'Asia',
      },
      {
        id: 221,
        name: 'Togo',
        iso2: 'TG',
        iso3: 'TGO',
        continent: 'Africa',
      },
      {
        id: 222,
        name: 'Tokelau',
        iso2: 'TK',
        iso3: 'TKL',
        continent: 'Oceania',
      },
      {
        id: 223,
        name: 'Tonga',
        iso2: 'TO',
        iso3: 'TON',
        continent: 'Oceania',
      },
      {
        id: 224,
        name: 'Trinidad and Tobago',
        iso2: 'TT',
        iso3: 'TTO',
        continent: 'NorthAmerica',
      },
      {
        id: 225,
        name: 'Tunisia',
        iso2: 'TN',
        iso3: 'TUN',
        continent: 'Africa',
      },
      {
        id: 226,
        name: 'Turkey',
        iso2: 'TR',
        iso3: 'TUR',
        continent: 'Asia',
      },
      {
        id: 227,
        name: 'Turkmenistan',
        iso2: 'TM',
        iso3: 'TKM',
        continent: 'Asia',
      },
      {
        id: 228,
        name: 'Turks and Caicos Islands',
        iso2: 'TC',
        iso3: 'TCA',
        continent: 'NorthAmerica',
      },
      {
        id: 229,
        name: 'Tuvalu',
        iso2: 'TV',
        iso3: 'TUV',
        continent: 'Oceania',
      },
      {
        id: 230,
        name: 'Uganda',
        iso2: 'UG',
        iso3: 'UGA',
        continent: 'Africa',
      },
      {
        id: 231,
        name: 'Ukraine',
        iso2: 'UA',
        iso3: 'UKR',
        continent: 'Europe',
      },
      {
        id: 232,
        name: 'United Arab Emirates',
        iso2: 'AE',
        iso3: 'ARE',
        continent: 'Asia',
      },
      {
        id: 233,
        name: 'United Kingdom',
        iso2: 'GB',
        iso3: 'GBR',
        continent: 'Europe',
      },
      {
        id: 234,
        name: 'United States',
        iso2: 'US',
        iso3: 'USA',
        continent: 'NorthAmerica',
      },
      {
        id: 235,
        name: 'United States Minor Outlying Islands',
        iso2: 'UM',
        iso3: 'UMI',
        continent: 'Oceania',
      },
      {
        id: 236,
        name: 'Uruguay',
        iso2: 'UY',
        iso3: 'URY',
        continent: 'SouthAmerica',
      },
      {
        id: 237,
        name: 'Uzbekistan',
        iso2: 'UZ',
        iso3: 'UZB',
        continent: 'Asia',
      },
      {
        id: 238,
        name: 'Vanuatu',
        iso2: 'VU',
        iso3: 'VUT',
        continent: 'Oceania',
      },
      {
        id: 239,
        name: 'Venezuela',
        iso2: 'VE',
        iso3: 'VEN',
        continent: 'SouthAmerica',
      },
      {
        id: 240,
        name: 'Viet Nam',
        iso2: 'VN',
        iso3: 'VNM',
        continent: 'Asia',
      },
      {
        id: 241,
        name: 'Virgin Islands (British)',
        iso2: 'VG',
        iso3: 'VGB',
        continent: 'NorthAmerica',
      },
      {
        id: 242,
        name: 'Virgin Islands (U.S.)',
        iso2: 'VI',
        iso3: 'VIR',
        continent: 'NorthAmerica',
      },
      {
        id: 243,
        name: 'Wallis and Futuna',
        iso2: 'WF',
        iso3: 'WLF',
        continent: 'Oceania',
      },
      {
        id: 244,
        name: 'Western Sahara',
        iso2: 'EH',
        iso3: 'ESH',
        continent: 'Africa',
      },
      {
        id: 245,
        name: 'Yemen',
        iso2: 'YE',
        iso3: 'YEM',
        continent: 'Asia',
      },
      {
        id: 246,
        name: 'Zambia',
        iso2: 'ZM',
        iso3: 'ZMB',
        continent: 'Africa',
      },
      {
        id: 247,
        name: 'Zimbabwe',
        iso2: 'ZW',
        iso3: 'ZWE',
        continent: 'Africa',
      },
      {
        id: 248,
        name: 'Afghanistan',
        iso2: 'AF',
        iso3: 'AFG',
        continent: 'Asia',
      },
      {
        id: 249,
        name: 'Algeria',
        iso2: 'DZ',
        iso3: 'DZA',
        continent: 'Africa',
      },
    ],
  })

  const dummyCompany = await prisma.company.upsert({
    where: { id: 'e09c54cc-9df4-4d02-bdd2-095f3d0979ab' },
    create: {
      id: 'e09c54cc-9df4-4d02-bdd2-095f3d0979ab',
      name: 'Acme Inc.',
      vatNumber: '123123123',
      addressLine1: '123 Main St',
      email: 'infor@acme.io',
      city: 'New York',
      postcode: '12345',
      countryId: 1,
    },
    update: {},
  })

  const alice = await prisma.user.upsert({
    where: { email: 'alice@rila1.io' },
    update: {},
    create: {
      email: 'alice@rila1.io',
      name: 'Alice',
      password: {
        create: {
          hash: await bcrypt.hash('testpass123', 10),
        },
      },
      company: {
        connect: {
          id: dummyCompany.id,
        },
      },
    },
  })

  const bob = await prisma.user.upsert({
    where: { email: 'bob@rila1.io' },
    update: {},
    create: {
      email: 'bob@rila1.io',
      name: 'Bob',
      password: {
        create: {
          hash: await bcrypt.hash('testpass123', 10),
        },
      },
      company: {
        create: {
          name: 'Bob Inc.',
          vatNumber: 'US123123123',
          addressLine1: '123 Main Street',
          addressLine2: 'Suite 1',
          city: 'New York',
          postcode: '12345',
          email: 'info@bob.io',
          country: {
            connect: {
              id: 234,
            },
          },
        },
      },
    },
  })

  const annexes = await prisma.annex.createMany({
    data: [
      {
        id: 'A.5',
        title: 'Information security policies',
        description: '',
      },
      {
        id: 'A.6',
        title: 'Organization of information security',
        description: '',
      },
      {
        id: 'A.7',
        title: 'Human resource security',
        description: '',
      },
      {
        id: 'A.8',
        title: 'Asset management',
        description: '',
      },
      {
        id: 'A.9',
        title: 'Access control',
        description: '',
      },
      {
        id: 'A.10',
        title: 'Cryptography',
        description: '',
      },
      {
        id: 'A.11',
        title: 'Physical and environmental security',
        description: '',
      },
      {
        id: 'A.12',
        title: 'Operations security',
        description: '',
      },
      {
        id: 'A.13',
        title: 'Communications security',
        description: '',
      },
      {
        id: 'A.14',
        title: 'System acquisition, development and maintenance',
        description: '',
      },
      {
        id: 'A.15',
        title: 'Supplier relationships',
        description: '',
      },
      {
        id: 'A.16',
        title: 'Information security incident management',
        description: '',
      },
      {
        id: 'A.17',
        title: 'Information security aspects of business continuity management',
        description: '',
      },
      {
        id: 'A.18',
        title: 'Compliance',
        description: '',
      },
    ],
  })

  await prisma.annexSection.createMany({
    data: [
      {
        id: 'A.5.1',
        annexId: 'A.5',
        title: 'Management direction for information security',
        description:
          'To provide management direction and support for information security in accordance with business requirements and relevant laws and regulations.',
      },
      {
        id: 'A.6.1',
        annexId: 'A.6',
        title: 'Internal organization',
        description:
          'To establish a management framework to initiate and control the implementation and operation of information security within the organization.',
      },
      {
        id: 'A.6.2',
        annexId: 'A.6',
        title: 'Mobile devices and teleworking',
        description:
          'To ensure the security of teleworking and use of mobile devices.',
      },
      {
        id: 'A.7.1',
        annexId: 'A.7',
        title: 'Prior to employment',
        description:
          'To ensure that employees and contractors understand their responsibilities and are suitable for the roles for which they are considered.',
      },
      {
        id: 'A.7.2',
        annexId: 'A.7',
        title: 'During employment',
        description:
          'To ensure that employees and contractors are aware of and fulfil their information security responsibilities.',
      },
      {
        id: 'A.7.3',
        annexId: 'A.7',
        title: 'Termination and change of employment',
        description:
          'To protect the organization’s interests as part of the process of changing or terminating employment.',
      },
      {
        id: 'A.8.1',
        annexId: 'A.8',
        title: 'Responsibilities for assets',
        description:
          'To identify organizational assets and define appropriate protection responsibilities.',
      },
      {
        id: 'A.8.2',
        annexId: 'A.8',
        title: 'Information classification',
        description:
          'To ensure that information receives an appropriate level of protection in accordance with its importance to the organization.',
      },
      {
        id: 'A.8.3',
        annexId: 'A.8',
        title: 'Media handling',
        description:
          'To prevent unauthorized disclosure, modification, removal or destruction of information stored on media.',
      },
      {
        id: 'A.9.1',
        annexId: 'A.9',
        title: 'Business requirements of access control',
        description:
          'To limit access to information and information processing facilities',
      },
      {
        id: 'A.9.2',
        annexId: 'A.9',
        title: 'User access management',
        description:
          'To ensure authorized user access and to prevent unauthorized access to systems and services.',
      },
      {
        id: 'A.9.3',
        annexId: 'A.9',
        title: 'User responisibilities',
        description: '',
      },
      {
        id: 'A.9.4',
        annexId: 'A.9',
        title: 'System and application access control',
        description: '',
      },
      {
        id: 'A.10.1',
        annexId: 'A.10',
        title: 'Cryptographic controls',
        description:
          'To ensure proper and effective use of cryptography to protect the confidentiality, authenauthenticity and/or integrity of information',
      },
      {
        id: 'A.11.1',
        annexId: 'A.11',
        title: 'Secure areas',
        description:
          'To prevent unauthorized physical access, damage and interference to the organization’s information and information processing facilities.',
      },
      {
        id: 'A.11.2',
        annexId: 'A.11',
        title: 'Equipment',
        description:
          'To prevent loss, damage, theft or compromise of assets and interruption to the organization’s operations.',
      },
      {
        id: 'A.12.1',
        annexId: 'A.12',
        title: 'Operational procedures and responsibilities',
        description:
          'To ensure correct and secure operations of information processing facilities.',
      },
      {
        id: 'A.12.2',
        annexId: 'A.12',
        title: 'Protection from malware',
        description:
          'To ensure that information and information processing facilities are protected against malware.',
      },
      {
        id: 'A.12.3',
        annexId: 'A.12',
        title: 'Backup',
        description: 'To protect against loss of data.',
      },
      {
        id: 'A.12.4',
        annexId: 'A.12',
        title: 'Logging and monitoring',
        description: 'To record events and generate evidence.',
      },
      {
        id: 'A.12.5',
        annexId: 'A.12',
        title: 'Control of operational software',
        description: 'To ensure the integrity of operational systems.',
      },
      {
        id: 'A.12.6',
        annexId: 'A.12',
        title: 'Technical vulnerability management',
        description: 'To prevent exploitation of technical vulnerabilities.',
      },
      {
        id: 'A.12.7',
        annexId: 'A.12',
        title: 'Information systems audit considerations',
        description:
          'To minimise the impact of audit activities on operational systems.',
      },
      {
        id: 'A.13.1',
        annexId: 'A.13',
        title: 'Network security management',
        description:
          'To ensure the protection of information in networks and its supporting information processing facilities.',
      },
      {
        id: 'A.13.2',
        annexId: 'A.13',
        title: 'Information transfer',
        description:
          'To maintain the security of information transferred within an organization and with any external entity.',
      },
      {
        id: 'A.14.1',
        annexId: 'A.14',
        title: 'Security requirements of information systems',
        description:
          'To ensure that information security is an integral part of information systems across the entire lifecycle. This also includes the requirements for information systems which provide services over public networks.',
      },
      {
        id: 'A.14.2',
        annexId: 'A.14',
        title: 'Security in development and support processes',
        description:
          'To ensure that information security is designed and implemented within the development lifecycle of information systems.',
      },
      {
        id: 'A.14.3',
        annexId: 'A.14',
        title: 'Test data',
        description: 'To ensure the protection of data used for testing.',
      },
      {
        id: 'A.15.1',
        annexId: 'A.15',
        title: 'Information security in supplier relationships',
        description:
          'To ensure protection of the organization’s assets that is accessible by suppliers.',
      },
      {
        id: 'A.15.2',
        annexId: 'A.15',
        title: 'Supplier service delivery management',
        description:
          'To maintain an agreed level of information security and service delivery in line with supplier agreements.',
      },
      {
        id: 'A.16.1',
        annexId: 'A.16',
        title: 'Management of information security incidents and improvements',
        description:
          'To ensure a consistent and effective approach to the management of information security\nincidents, including communication on security events and weaknesses.',
      },
      {
        id: 'A.17.1',
        annexId: 'A.17',
        title: 'Information security continuity',
        description:
          'Information security continuity shall be embedded in the organization’s business continuity management systems.',
      },
      {
        id: 'A.17.2',
        annexId: 'A.17',
        title: 'Redundancies',
        description:
          'To ensure availability of information processing facilities.',
      },
      {
        id: 'A.18.1',
        annexId: 'A.18',
        title: 'Compliance with legal and contractual requirements',
        description:
          'To avoid breaches of legal, statutory, regulatory or contractual obligations related to information\nsecurity and of any security requirements.',
      },
      {
        id: 'A.18.2',
        annexId: 'A.18',
        title: 'Information security reviews',
        description: '',
      },
    ],
  })

  await prisma.control.createMany({
    data: [
      {
        id: 'A.5.1.1',
        annexSectionId: 'A.5.1',
        title: 'Policies for information security',
        description:
          'A set of policies for information security shall be defined, approved by management, published and communicated to employees and relevant external parties.',
      },
      {
        id: 'A.5.1.2',
        annexSectionId: 'A.5.1',
        title: 'Review of the policies for information security',
        description:
          'The policies for information security shall be reviewed at planned intervals or if significant changes occur to ensure their continuing suitability, adequacy and effectiveness.',
      },
      {
        id: 'A.6.1.1',
        annexSectionId: 'A.6.1',
        title: 'Information security roles and responibilities',
        description:
          'All information security responsibilities shall be defined and allocated.',
      },
      {
        id: 'A.6.1.2',
        annexSectionId: 'A.6.1',
        title: 'Segregation of duties',
        description:
          'Conflicting duties and areas of responsibility shall be segregated to reduce opportunities for unauthorized or unintentional modification or misuse of the organization’s assets.',
      },
      {
        id: 'A.6.1.3',
        annexSectionId: 'A.6.1',
        title: 'Contact with authorities',
        description:
          'Appropriate contacts with relevant authorities shall be maintained.',
      },
      {
        id: 'A.6.1.4',
        annexSectionId: 'A.6.1',
        title: 'Contact with special interest groups',
        description:
          'Appropriate contacts with special interest groups or other specialist security forums and professional associations shall be maintained.',
      },
      {
        id: 'A.6.1.5',
        annexSectionId: 'A.6.1',
        title: 'Information security in project management',
        description:
          'Information security shall be addressed in project management, regardless of the type of the project.',
      },
      {
        id: 'A.6.2.1',
        annexSectionId: 'A.6.2',
        title: 'Mobile device policy',
        description:
          'A policy and supporting security measures shall be adopted to manage the risks introduced by using mobile devices.',
      },
      {
        id: 'A.6.2.2',
        annexSectionId: 'A.6.2',
        title: 'Teleworking',
        description:
          'A policy and supporting security measures shall be implemented to protect information accessed, processed or stored at teleworking sites.',
      },
      {
        id: 'A.7.1.1',
        annexSectionId: 'A.7.1',
        title: 'Screening',
        description:
          'Background verification checks on all candidates for employment shall be carried out in accordance with relevant laws, regulations and ethics and shall be proportional to the business requirements, the classification of the information to be accessed and the perceived risks.',
      },
      {
        id: 'A.7.1.2',
        annexSectionId: 'A.7.1',
        title: 'Terms and conditions of employment',
        description:
          'The contractual agreements with employees and contractors shall state their and the organization’s responsibilities for information security.',
      },
      {
        id: 'A.7.2.1',
        annexSectionId: 'A.7.2',
        title: 'Management resposibilities',
        description:
          'Management shall require all employees and contractors to apply information security in accordance with the established policies and procedures of the organization.',
      },
      {
        id: 'A.7.2.2',
        annexSectionId: 'A.7.2',
        title: 'Information security awareness, education and training',
        description:
          'All employees of the organization and, where relevant, contractors shall receive appropriate awareness education and training and regular updates in organizational policies and procedures, as relevant for their job function.',
      },
      {
        id: 'A.7.2.3',
        annexSectionId: 'A.7.2',
        title: 'Disciplinary process',
        description:
          'There shall be a formal and communicated disciplinary process in place to take action against employees who have committed an information security breach.',
      },
      {
        id: '7.3.1',
        annexSectionId: 'A.7.3',
        title: 'Termination or change of employment responsibilities',
        description:
          'Information security responsibilities and duties that remain valid after termination or change of employment shall be defined, communicated to the employee or contractor and enforced.',
      },
      {
        id: 'A.8.1.1',
        annexSectionId: 'A.8.1',
        title: 'Inventory of assets',
        description:
          'Assets associated with information and information processing facilities shall be identified and an inventory of these assets shall be drown up and maintained.',
      },
      {
        id: 'A.8.1.2',
        annexSectionId: 'A.8.1',
        title: 'Ownership of asstes',
        description: 'Assets maintained in the inventory shall be owned.',
      },
      {
        id: 'A.8.1.3',
        annexSectionId: 'A.8.1',
        title: 'Acceptable use of assets',
        description:
          'Rules for the acceptable use of information and of assets associated with information and information processing facilities shall be identified, documented and implemented.',
      },
      {
        id: 'A.8.1.4',
        annexSectionId: 'A.8.1',
        title: 'Return of assets',
        description:
          'All employees and external party users shall return all of the organizational assets in their possession upon termination of their employment, contract or agreement.',
      },
      {
        id: 'A.8.2.1',
        annexSectionId: 'A.8.2',
        title: 'Classification of information',
        description:
          'Information shall be classified in terms of legal requirements, value, criticality and sensitivity to unauthorised disclosure or modification.',
      },
      {
        id: 'A.8.2.2',
        annexSectionId: 'A.8.2',
        title: 'Labelling of information',
        description:
          'An appropriate set of procedures for information labelling shall be developed and implemented in accordance with the information classification scheme adopted by the organization.',
      },
      {
        id: 'A.8.2.3',
        annexSectionId: 'A.8.2',
        title: 'Handeling of assets',
        description:
          'Procedures for handling assets shall be developed and implemented in accordance with the information classification scheme adopted by the organization.',
      },
      {
        id: 'A.8.3.1',
        annexSectionId: 'A.8.3',
        title: 'Management of removeble media',
        description:
          'Procedures shall be implemented for the management of removable media in accordance with the classification scheme adopted by the organization.',
      },
      {
        id: 'A.8.3.2',
        annexSectionId: 'A.8.3',
        title: 'Disposal of media',
        description:
          'Media shall be disposed of securely when no longer required, using formal procedures.',
      },
      {
        id: 'A.8.3.3',
        annexSectionId: 'A.8.3',
        title: 'Physical media transfer',
        description:
          'Media containing information shall be protected against unauthorized access, misuse or corruption during transportation.',
      },
      {
        id: 'A.9.1.1',
        annexSectionId: 'A.9.1',
        title: 'Access control policy',
        description:
          'An access control policy shall be established, documented andreviewed based on business and information security requirements.',
      },
      {
        id: 'A.9.1.2',
        annexSectionId: 'A.9.1',
        title: 'Access to network and network servicies',
        description:
          'Users shall only be provided with access to the network and network\nservices that they have been specifically authorized to use.',
      },
      {
        id: 'A.9.2.1',
        annexSectionId: 'A.9.2',
        title: 'User registration and dr-registration',
        description:
          'A formal user registration and de-registration process shall be implemented to enable assignment of access rights.',
      },
      {
        id: 'A.9.2.2',
        annexSectionId: 'A.9.2',
        title: 'User access provisioning',
        description:
          'A formal user access provisioning process shall be implemented to assign or revoke access rights for all user types to all systems and services.',
      },
      {
        id: 'A.9.2.3',
        annexSectionId: 'A.9.2',
        title: 'Management of privileged access rights',
        description:
          'The allocation and use of privileged access rights shall be restricted and controlled.',
      },
      {
        id: 'A.9.2.4',
        annexSectionId: 'A.9.2',
        title: 'Management of secret authentification information of users',
        description:
          'The allocation of secret authentication information shall be concontrolled\nthrough a formal management process.',
      },
      {
        id: 'A.9.2.5',
        annexSectionId: 'A.9.2',
        title: 'Review of user access rights',
        description:
          'Asset owners shall review users’ access rights at regular intervals.',
      },
      {
        id: 'A.9.2.6',
        annexSectionId: 'A.9.2',
        title: 'Remuval or adjusment of access rights',
        description:
          'The access rights of all employees and external party users to information and information processing facilities shall be removed upon termination of their employment, contract or agreement, or adjusted upon change.',
      },
      {
        id: 'A.9.3.1',
        annexSectionId: 'A.9.3',
        title: 'Use of sicret authentification information',
        description:
          'Users shall be required to follow the organization’s practices in the use of secret authentication information.',
      },
      {
        id: 'A.9.4.1',
        annexSectionId: 'A.9.4',
        title: 'Information access restriction',
        description:
          'Access to information and application system functions shall be restricted in accordance with the access control policy.',
      },
      {
        id: 'A.9.4.2',
        annexSectionId: 'A.9.4',
        title: 'Secure log-on procedures',
        description:
          'Where required by the access control policy, access to systems and applications shall be controlled by a secure log-on procedure.',
      },
      {
        id: 'A.9.4.3',
        annexSectionId: 'A.9.4',
        title: 'Password management system',
        description:
          'Password management systems shall be interactive and shall ensure quality passwords.',
      },
      {
        id: 'A.9.4.4',
        annexSectionId: 'A.9.4',
        title: 'Use of privileged utility programs',
        description:
          'The use of utility programs that might be capable of overriding system and application controls shall be restricted and tightly controlled.',
      },
      {
        id: 'A.9.4.5',
        annexSectionId: 'A.9.4',
        title: 'Access control to program source code',
        description: 'Access to program source code shall be restricted.',
      },
      {
        id: 'A.10.1.1',
        annexSectionId: 'A.10.1',
        title: 'Policy on the use of cryptographic controls',
        description:
          'A policy on the use of cryptographic controls for protection of information shall be developed and implemented.',
      },
      {
        id: 'A.10.1.2',
        annexSectionId: 'A.10.1',
        title: 'Key management',
        description:
          'A policy on the use, protection and lifetime of cryptographic keys\nshall be developed and implemented through their whole lifecycle.',
      },
      {
        id: 'A.11.1.1',
        annexSectionId: 'A.11.1',
        title: 'Physical security perimeter',
        description:
          'Security perimeters shall be defined and used to protect areas that\ncontain either sensitive or critical information and information\nprocessing facilities.',
      },
      {
        id: 'A.11.1.2',
        annexSectionId: 'A.11.1',
        title: 'Physical entry controls',
        description:
          'Secure areas shall be protected by appropriate entry controls to\nensure that only authorized personnel are allowed access.',
      },
      {
        id: 'A.11.1.3',
        annexSectionId: 'A.11.1',
        title: 'Securing officies, rooms and facilities',
        description:
          'Physical security for offices, rooms and facilities shall be designed\nand applied.',
      },
      {
        id: 'A.11.1.4',
        annexSectionId: 'A.11.1',
        title: 'Protecting against external and environmental threats',
        description:
          'Physical protection against natural disasters, malicious attack or\naccidents shall be designed and applied.',
      },
      {
        id: 'A.11.1.5',
        annexSectionId: 'A.11.1',
        title: 'Working in secure areas',
        description:
          'Procedures for working in secure areas shall be designed and\napplied.',
      },
      {
        id: 'A.11.1.6',
        annexSectionId: 'A.11.1',
        title: 'Delivery and loading areas',
        description:
          'Access points such as delivery and loading areas and other points\nwhere unauthorized persons could enter the premises shall be\ncontrolled and, if possible, isolated from information processing\nfacilities to avoid unauthorized access.',
      },
      {
        id: 'A.11.2.1',
        annexSectionId: 'A.11.2',
        title: 'Equipment siting and protection',
        description:
          'Equipment shall be sited and protected to reduce the risks from\nenvironmental threats and hazards, and opportunities for unauthorized\naccess.',
      },
      {
        id: 'A.11.2.2',
        annexSectionId: 'A.11.2',
        title: 'Supporting utilities',
        description:
          'Equipment shall be protected from power failures and other disruptions\ncaused by failures in supporting utilities.',
      },
      {
        id: 'A.11.2.3',
        annexSectionId: 'A.11.2',
        title: 'Cabling security',
        description:
          'Power and telecommunications cabling carrying data or supporting\ninformation services shall be protected from interception,\ninterference or damage.',
      },
      {
        id: 'A.11.2.4',
        annexSectionId: 'A.11.2',
        title: 'Equipmnet maintetance',
        description:
          'Equipment shall be correctly maintained to ensure its continued\navailability and integrity.',
      },
      {
        id: 'A.11.2.5',
        annexSectionId: 'A.11.2',
        title: 'Remuval of assets',
        description:
          'Equipment, information or software shall not be taken off-site\nwithout prior authorization.',
      },
      {
        id: 'A.11.2.6',
        annexSectionId: 'A.11.2',
        title: 'Security of equipment and assets off-premises',
        description:
          'Security shall be applied to off-site assets taking into account the\ndifferent risks of working outside the organization’s premises.',
      },
      {
        id: 'A.11.2.7',
        annexSectionId: 'A.11.2',
        title: 'Secure disposal or reuse of equipment',
        description:
          'All items of equipment containing storage media shall be verified\nto ensure that any sensitive data and licensed software has been\nremoved or securely overwritten prior to disposal or re-use.',
      },
      {
        id: 'A.11.2.8',
        annexSectionId: 'A.11.2',
        title: 'Unattended user equipment',
        description:
          'Users shall ensure that unattended equipment has appropriate\nprotection.',
      },
      {
        id: 'A.11.2.9',
        annexSectionId: 'A.11.2',
        title: 'Clear desk and clear screen policy',
        description:
          'A clear desk policy for papers and removable storage media and\na clear screen policy for information processing facilities shall be\nadopted.',
      },
      {
        id: 'A.12.1.1',
        annexSectionId: 'A.12.1',
        title: 'Documented operating procedures',
        description:
          'Operating procedures shall be documented and made available to\nall users who need them.',
      },
      {
        id: 'A.12.1.2',
        annexSectionId: 'A.12.1',
        title: 'Change management',
        description:
          'Changes to the organization, business processes, information processing\nfacilities and systems that affect information security shall\nbe controlled.',
      },
      {
        id: 'A.12.1.3',
        annexSectionId: 'A.12.1',
        title: 'Capacity management',
        description:
          'The use of resources shall be monitored, tuned and projections\nmade of future capacity requirements to ensure the required system\nperformance.',
      },
      {
        id: 'A.12.1.4',
        annexSectionId: 'A.12.1',
        title:
          'Separation of development, testing and operational environments.',
        description:
          'Development, testing, and operational environments shall be separated\nto reduce the risks of unauthorized access or changes to the\noperational environment.',
      },
      {
        id: 'A.12.2.1',
        annexSectionId: 'A.12.2',
        title: 'Controls against malware',
        description:
          'Detection, prevention and recovery controls to protect against\nmalware shall be implemented, combined with appropriate user\nawareness.',
      },
      {
        id: 'A.12.3.1',
        annexSectionId: 'A.12.3',
        title: 'Information backup',
        description:
          'Backup copies of information, software and system images shall be\ntaken and tested regularly in accordance with an agreed backup\npolicy.',
      },
      {
        id: 'A.12.4.1',
        annexSectionId: 'A.12.4',
        title: 'Event logging',
        description:
          'Event logs recording user activities, exceptions, faults and information\nsecurity events shall be produced, kept and regularly\nreviewed.',
      },
      {
        id: 'A.12.4.2',
        annexSectionId: 'A.12.4',
        title: 'Protection of log information',
        description:
          'Logging facilities and log information shall be protected against\ntampering and unauthorized access.',
      },
      {
        id: 'A.12.4.3',
        annexSectionId: 'A.12.4',
        title: 'Administrator and operator logs',
        description:
          'System administrator and system operator activities shall be\nlogged and the logs protected and regularly reviewed.',
      },
      {
        id: 'A.12.4.4',
        annexSectionId: 'A.12.4',
        title: 'Clock synchronisation',
        description:
          'The clocks of all relevant information processing systems within\nan organization or security domain shall be synchronised to a single\nreference time source.',
      },
      {
        id: 'A.12.5.1',
        annexSectionId: 'A.12.5',
        title: 'Installation of software on operational systems',
        description:
          'Procedures shall be implemented to control the installation of software\non operational systems.',
      },
      {
        id: 'A.12.6.1',
        annexSectionId: 'A.12.6',
        title: 'Management of technical vulnerabilities',
        description:
          'Information about technical vulnerabilities of information systems\nbeing used shall be obtained in a timely fashion, the organization’s\nexposure to such vulnerabilities evaluated and appropriate measures\ntaken to address the associated risk.',
      },
      {
        id: 'A.12.6.2',
        annexSectionId: 'A.12.6',
        title: 'Restrictions on software installation',
        description:
          'Rules governing the installation of software by users shall be\nestablished and implemented.',
      },
      {
        id: 'A.12.7.1',
        annexSectionId: 'A.12.7',
        title: 'Information systems audit controls',
        description:
          'Audit requirements and activities involving verification of operational\nsystems shall be carefully planned and agreed to minimise\ndisruptions to business processes.',
      },
      {
        id: 'A.13.1.1',
        annexSectionId: 'A.13.1',
        title: 'Network controls',
        description:
          'Networks shall be managed and controlled to protect information\nin systems and applications.',
      },
      {
        id: 'A.13.1.2',
        annexSectionId: 'A.13.1',
        title: 'Security of network servicies',
        description:
          'Security mechanisms, service levels and management requirements\nof all network services shall be identified and included in\nnetwork services agreements, whether these services are provided\nin-house or outsourced.',
      },
      {
        id: 'A.13.1.3',
        annexSectionId: 'A.13.1',
        title: 'Segregation in networks',
        description:
          'Groups of information services, users and information systems\nshall be segregated on networks.',
      },
      {
        id: 'A.13.2.1',
        annexSectionId: 'A.13.2',
        title: 'Information transfer policies and procedures',
        description:
          'Formal transfer policies, procedures and controls shall be in place\nto protect the transfer of information through the use of all types\nof communication facilities.',
      },
      {
        id: 'A.13.2.2',
        annexSectionId: 'A.13.2',
        title: 'Agreements on information transfer',
        description:
          'Agreements shall address the secure transfer of business information\nbetween the organization and external parties.',
      },
      {
        id: 'A.13.2.3',
        annexSectionId: 'A.13.2',
        title: 'Electronic messaging',
        description:
          'Information involved in electronic messaging shall be appropriately\nprotected.',
      },
      {
        id: 'A.13.2.4',
        annexSectionId: 'A.13.2',
        title: 'Confidentiality or nondisclosure\nagreements Control',
        description:
          'Requirements for confidentiality or non-disclosure agreements\nreflecting the organization’s needs for the protection of information\nshall be identified, regularly reviewed and documented.',
      },
      {
        id: 'A.14.1.1',
        annexSectionId: 'A.14.1',
        title: 'Information security requirements analysis\nand specification',
        description:
          'The information security related requirements shall be included in\nthe requirements for new information systems or enhancements to\nexisting information systems.',
      },
      {
        id: 'A.14.1.2',
        annexSectionId: 'A.14.1',
        title: 'Securing application services on public\nnetworks',
        description:
          'Information involved in application services passing over public\nnetworks shall be protected from fraudulent activity, contract dispute\nand unauthorized disclosure and modification.',
      },
      {
        id: 'A.14.1.3',
        annexSectionId: 'A.14.1',
        title: 'Protecting application services transactions',
        description:
          'Information involved in application service transactions shall be\nprotected to prevent incomplete transmission, mis-routing, unauthorized\nmessage alteration, unauthorized disclosure, unauthorized\nmessage duplication or replay.',
      },
      {
        id: 'A.14.2.1',
        annexSectionId: 'A.14.2',
        title: 'Secure development policy',
        description:
          'Rules for the development of software and systems shall be established\nand applied to developments within the organization.',
      },
      {
        id: 'A.14.2.2',
        annexSectionId: 'A.14.2',
        title: 'System change control\nprocedures',
        description:
          'Changes to systems within the development lifecycle shall be controlled\nby the use of formal change control procedures.',
      },
      {
        id: 'A.14.2.3',
        annexSectionId: 'A.14.2',
        title:
          'Technical review of applications after\noperating platform changes',
        description:
          'When operating platforms are changed, business critical applications\nshall be reviewed and tested to ensure there is no adverse\nimpact on organizational operations or security.',
      },
      {
        id: 'A.14.2.4',
        annexSectionId: 'A.14.2',
        title: 'Restrictions on changes to software\npackages',
        description:
          'Modifications to software packages shall be discouraged, limited to\nnecessary changes and all changes shall be strictly controlled.',
      },
      {
        id: 'A.14.2.5',
        annexSectionId: 'A.14.2',
        title: 'Secure system engineering\nprinciples',
        description:
          'Principles for engineering secure systems shall be established,\ndocumented, maintained and applied to any information system\nimplementation efforts.',
      },
      {
        id: 'A.14.2.6',
        annexSectionId: 'A.14.2',
        title: 'Secure development environment',
        description:
          'Organizations shall establish and appropriately protect secure\ndevelopment environments for system development and integration\nefforts that cover the entire system development lifecycle.',
      },
      {
        id: 'A.14.2.7',
        annexSectionId: 'A.14.2',
        title: 'Outsourced development',
        description:
          'The organization shall supervise and monitor the activity of outsourced\nsystem development.',
      },
      {
        id: 'A.14.2.8',
        annexSectionId: 'A.14.2',
        title: 'System security testing',
        description:
          'Testing of security functionality shall be carried out during development.',
      },
      {
        id: 'A.14.2.9',
        annexSectionId: 'A.14.2',
        title: 'System acceptance testing',
        description:
          'Acceptance testing programs and related criteria shall be established\nfor new information systems, upgrades and new versions.',
      },
      {
        id: 'A.14.3.1',
        annexSectionId: 'A.14.3',
        title: 'Protection of test data',
        description:
          'Test data shall be selected carefully, protected and controlled.',
      },
      {
        id: 'A.15.1.1',
        annexSectionId: 'A.15.1',
        title: 'Information security policy for supplier relationships',
        description:
          'Information security requirements for mitigating the risks associated\nwith supplier’s access to the organization’s assets shall be\nagreed with the supplier and documented.',
      },
      {
        id: 'A.15.1.2',
        annexSectionId: 'A.15.1',
        title: 'Addressing security within supplier agreements',
        description:
          'All relevant information security requirements shall be established\nand agreed with each supplier that may access, process, store,\ncommunicate, or provide IT infrastructure components for, the\norganization’s information.',
      },
      {
        id: 'A.15.1.3',
        annexSectionId: 'A.15.1',
        title: 'Information and communication\ntechnology supply chain',
        description:
          'Agreements with suppliers shall include requirements to address\nthe information security risks associated with information and\ncommunications technology services and product supply chain.',
      },
      {
        id: 'A.15.2.1',
        annexSectionId: 'A.15.2',
        title: 'Monitoring and review\nof supplier services',
        description:
          'Organizations shall regularly monitor, review and audit supplier\nservice delivery.',
      },
      {
        id: 'A.15.2.2',
        annexSectionId: 'A.15.2',
        title: 'Managing changes to supplier services',
        description:
          'Changes to the provision of services by suppliers, including\nmaintaining and improving existing information security policies,\nprocedures and controls, shall be managed, taking account of the\ncriticality of business information, systems and processes involved\nand re-assessment of risks.',
      },
      {
        id: 'A.16.1.1',
        annexSectionId: 'A.16.1',
        title: 'Responsibilities and procedures',
        description:
          'Management responsibilities and procedures shall be established\nto ensure a quick, effective and orderly response to information\nsecurity incidents.',
      },
      {
        id: 'A.16.1.2',
        annexSectionId: 'A.16.1',
        title: 'Reporting information security events',
        description:
          'Information security events shall be reported through appropriate\nmanagement channels as quickly as possible.',
      },
      {
        id: 'A.16.1.3',
        annexSectionId: 'A.16.1',
        title: 'Reporting information security weaknesses',
        description:
          'Employees and contractors using the organization’s information\nsystems and services shall be required to note and report any\nobserved or suspected information security weaknesses in systems\nor services.',
      },
      {
        id: 'A.16.1.4',
        annexSectionId: 'A.16.1',
        title: 'Assessment of and decision on information\nsecurity events',
        description:
          'Information security events shall be assessed and it shall be\ndecided if they are to be classified as information security incidents.',
      },
      {
        id: 'A.16.1.5',
        annexSectionId: 'A.16.1',
        title: 'Response to information security incidents',
        description:
          'Information security incidents shall be responded to in accordance\nwith the documented procedures.',
      },
      {
        id: 'A.16.1.6',
        annexSectionId: 'A.16.1',
        title: 'Learning from information security\nincidents',
        description:
          'Knowledge gained from analysing and resolving information security\nincidents shall be used to reduce the likelihood or impact of\nfuture incidents.',
      },
      {
        id: 'A.16.1.7',
        annexSectionId: 'A.16.1',
        title: 'Collection of evidence',
        description:
          'The organization shall define and apply procedures for the identification,\ncollection, acquisition and preservation of information,\nwhich can serve as evidence.',
      },
      {
        id: 'A.17.1.1',
        annexSectionId: 'A.17.1',
        title: 'Planning information security continuity',
        description:
          'The organization shall determine its requirements for information\nsecurity and the continuity of information security management in\nadverse situations, e.g. during a crisis or disaster.',
      },
      {
        id: 'A.17.1.2',
        annexSectionId: 'A.17.1',
        title: 'Implementing information security continuity',
        description:
          'The organization shall establish, document, implement and maintain\nprocesses, procedures and controls to ensure the required\nlevel of continuity for information security during an adverse situation.',
      },
      {
        id: 'A.17.1.3',
        annexSectionId: 'A.17.1',
        title: 'Verify, review and evaluate information\nsecurity continuity',
        description:
          'The organization shall verify the established and implemented\ninformation security continuity controls at regular intervals in\norder to ensure that they are valid and effective during adverse\nsituations.',
      },
      {
        id: 'A.17.2.1',
        annexSectionId: 'A.17.2',
        title: 'Availability of information\nprocessing facilities',
        description:
          'Information processing facilities shall be implemented with redundancy\nsufficient to meet availability requirements.',
      },
      {
        id: 'A.18.1.1',
        annexSectionId: 'A.18.1',
        title:
          'Identification of applicable\nlegislation and contractual requirements',
        description:
          'All relevant legislative statutory, regulatory, contractual requirements\nand the organization’s approach to meet these requirements\nshall be explicitly identified, documented and kept up to date for\neach information system and the organization.',
      },
      {
        id: 'A.18.1.2',
        annexSectionId: 'A.18.1',
        title: 'Intellectual property rights',
        description:
          'Appropriate procedures shall be implemented to ensure compliance\nwith legislative, regulatory and contractual requirements\nrelated to intellectual property rights and use of proprietary software\nproducts.',
      },
      {
        id: 'A.18.1.3',
        annexSectionId: 'A.18.1',
        title: 'Protection of records',
        description:
          'Records shall be protected from loss, destruction, falsification,\nunauthorized access and unauthorized release, in accordance with\nlegislatory, regulatory, contractual and business requirements.',
      },
      {
        id: 'A.18.1.4',
        annexSectionId: 'A.18.1',
        title: 'Privacy and protection of personally identifiable\ninformation',
        description:
          'Privacy and protection of personally identifiable information shall\nbe ensured as required in relevant legislation and regulation where\napplicable.',
      },
      {
        id: 'A.18.1.5',
        annexSectionId: 'A.18.1',
        title: 'Regulation of cryptographic controls',
        description:
          'Cryptographic controls shall be used in compliance with all relevant\nagreements, legislation and regulations.',
      },
      {
        id: 'A.18.2.1',
        annexSectionId: 'A.18.2',
        title: 'Independent review of information security',
        description:
          'The organization’s approach to managing information security and\nits implementation (i.e. control objectives, controls, policies, processes\nand procedures for information security) shall be reviewed\nindependently at planned intervals or when significant changes\noccur.',
      },
      {
        id: 'A.18.2.2',
        annexSectionId: 'A.18.2',
        title: 'Compliance with security policies and\nstandards',
        description:
          'Managers shall regularly review the compliance of information\nprocessing and procedures within their area of responsibility with\nthe appropriate security policies, standards and any other security\nrequirements.',
      },
      {
        id: 'A.18.2.3',
        annexSectionId: 'A.18.2',
        title: 'Technical compliance review',
        description:
          'Information systems shall be regularly reviewed for compliance\nwith the organization’s information security policies and standards.',
      },
    ],
  })

  await prisma.$queryRaw`DROP TABLE IF EXISTS latest_control_implementations;`
  //create the latest_control_implementations view
  await prisma.$queryRaw`
    CREATE OR REPLACE VIEW latest_control_implementations
              (id, control_id, applicability, justification, company_id, user_id, created_at, updated_at) as
                  SELECT DISTINCT ON (ci.control_id) ci.id,
                                     ci.control_id,
                                     ci.applicability,
                                     ci.justification,
                                     ci.company_id,
                                     ci.user_id,
                                     ci.created_at,
                                     ci.updated_at
                    FROM control_implementations ci
                    ORDER BY ci.control_id, ci.created_at DESC;`
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
