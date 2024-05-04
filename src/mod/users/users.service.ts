import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ErrorManager } from 'src/conf/error.manager';
import { compare, hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) { }
  /* públic*/
  async create(createUserDto: CreateUserDto) {
    try {
      const { username } = createUserDto
      createUserDto.password = await hash(createUserDto.password, +process.env.HASH_SALT)
      const userExist = await this.userRepository.findOneBy({ username })
      if (userExist) throw new ErrorManager({ type: 'CONFLICT', message: 'IT ALREADY EXISTS' })
      const resp = await this.userRepository.save(createUserDto)
      const { password, ...objet } = resp
      return objet
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  /* admins */
  async findAll() {
    try {
      const resp = await this.userRepository.find({});
      if (!resp) throw new ErrorManager({ type: 'NOT_FOUND', message: 'IT WAS NOT FOUND' })
      return resp
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  /* admins */
  async findOne(id: string) {
    try {
      const resp = await this.userRepository.findOneBy({ id });
      if (!resp) throw new ErrorManager({ type: 'NOT_FOUND', message: 'IT WAS NOT FOUND' })
      return resp
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  /* public */
  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const userExist = await this.userRepository.findOneBy({ id })
      if (!userExist) throw new ErrorManager({ type: 'NOT_FOUND', message: 'IT WAS NOT FOUND' })
      const { username, password, role, ...objet } = updateUserDto
      if (username !== userExist.username) {
        const userExistUsername = await this.userRepository.findOneBy({ username })
        if (userExistUsername) throw new ErrorManager({ type: 'CONFLICT', message: 'IT ALREADY EXISTS' })
      }
      if (!await compare(password, userExist.password)) throw new ErrorManager({ type: 'UNAUTHORIZED', message: 'INCORRECT CREDENTIALS' })
      else {  }
      const userUpdated = await this.userRepository.update(id, {username, ...objet})

      /* Implementar lógica para superadmins */




      return userUpdated;
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  /* admins */
  async remove(id: string) {
    try {
      const resp = await this.userRepository.delete(id)
      if (resp.affected === 0) throw new ErrorManager({ type: 'CONFLICT', message: 'COULD NOT BE DELETED' })
      return resp;
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }
}
