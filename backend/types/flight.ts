export interface IFlight {
  id?: string,
  date?: Date,
  originAirportIataCode: string, 
  destinationAirportIataCode: string,
  returnFlightId?: string,
  duration: number,
  direct: boolean,
  flightNumber: string,
  totalSeats: number,
  priceAdult: number,
  priceChild: number,
  priceInfant: number,
  taxRate?: number,
}