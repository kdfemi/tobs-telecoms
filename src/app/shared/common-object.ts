export enum BillsService {
    DSTV = 'dv',
    GOTV = 'gv',
    SMILERECHARGE = 'sr',
    SMILEDATA = 'sd',
    SPECTRANET = 'st',
    WAECRESULT = 'wr',
    NECORESULT = 'nr',
    ELECTRICITY = 'et',
    STARTIMES = 'ss'
  }

export const billServicesObject = [
  {name: 'dstv', url: BillsService.DSTV},
  {name: 'gotv', url: BillsService.GOTV},
  {name: 'Smile data bundle', url: BillsService.SMILEDATA},
  {name: 'Smile Recharge', url: BillsService.SMILERECHARGE},
  {name: 'Spectranet Pin Purchase', url: BillsService.SPECTRANET},
  {name: 'WAEC result', url: BillsService.WAECRESULT},
  {name: 'NECO result', url: BillsService.NECORESULT},
  {name: 'Electricity', url: BillsService.ELECTRICITY},
  {name: 'Startimes', url: BillsService.STARTIMES}
];

export function GetValueFromObject<T>(objectMap: T[], key: any, value: string ) {
  for (const object of objectMap) {
    if (object[key] === value) {
      return object as T;
    }
  }
}

