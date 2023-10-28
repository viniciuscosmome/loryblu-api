import { UnprocessableEntityException } from '@nestjs/common';

export class P2002Exception extends UnprocessableEntityException {
  constructor(target: string) {
    super({
      property: target || '',
      message: `O ${target} informado já está em uso.`,
    });
  }
}
