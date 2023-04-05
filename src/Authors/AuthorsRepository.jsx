import { injectable, inject } from 'inversify'
import { Config } from '../Core/Config'
import { makeObservable, action, toJS, observable } from 'mobx'
import { Types } from '../Core/Types'
import { UserModel } from '../Authentication/UserModel'
import { MessagePacking } from '../Core/Messages/MessagePacking'

@injectable()
export class AuthorsRepository {
  baseUrl

  @inject(Types.IDataGateway)
  dataGateway

  @inject(UserModel)
  userModel

  @inject(Config)
  config

  messagePm = 'UNSET'

  constructor() {
    makeObservable(this, { messagePm: observable })
  }

  load = async () => {
    const dto = await this.dataGateway.get(`/authors?emailOwnerId=${this.userModel.email}`)
    if (dto?.success) {
      this.messagePm = {
        success: dto.success,
        authors: dto.result.map((author) => {
          return author
        })
      }
    }
    return this.messagePm
  }

  // addAuthor = async (name) => {
  //   const requestDto = {
  //     name: name,
  //     emailOwnerId: 'a@b.com',
  //     latLon: [1, 2],
  //     bookIds: [1, 2]
  //   }
  //   let responseDto = await this.dataGateway.post(`/authors`, requestDto)
  //   return MessagePacking.unpackServerDtoToPm(responseDto)
  // }

  // reset = () => {
  //   this.messagePm = 'RESET'
  // }
}
