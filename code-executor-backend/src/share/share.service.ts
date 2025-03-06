
import { Injectable,NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class ShareService {

    constructor(private prisma:PrismaService){}

    // nest js code for sharing ID  
    async  shareCode(userId:number,code:string,language:string,output?:string){
        const sharedCode =  await this.prisma.sharedCode.create({
            data:{
                userId:Number(userId),
                code:code,
                language:language,
                output:output
            }
        });

        return { link: `https://yourapp.com/share/${sharedCode.id}` };
    }

    // retrieve the code snippet from their ID

    async getSharedCode(codeId:string){
        const sharedCode =  await this.prisma.sharedCode.findUnique({
            where:{
                id:codeId
            }
        })

        if (!sharedCode) throw new NotFoundException("Source code snippet not found")
        
        return sharedCode
    }

    

}
