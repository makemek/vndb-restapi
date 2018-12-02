import { readJsonSync } from "fs-extra"
import { join } from "path"
import { providersName } from "../../providers"
const { CONFIG_ENV } = providersName

const travel = (obj: any, tranformFn: any) => {
    const _travel = (_obj: any): any => {
        if (typeof _obj === "string") {
            return tranformFn ? tranformFn(_obj) : _obj
        }

        if (typeof _obj === "number" || _obj instanceof  Date || typeof _obj === "boolean") {
            return _obj
        }

        if (_obj instanceof Array) {
            return _obj.map( (it: any) => _travel(it) )
        }

        const keys = Object.keys(_obj)

        return keys.reduce((pre: any, curr: any) => {
                pre[curr] = _travel(_obj[curr])
                return pre
            }, {})
    }

    return _travel(obj)
}

export interface EmailSenderReceiver {
  from: string,
  to: string[],
  cc?: string[],
  bcc?: string[],
}

export interface EnvironmentConfig {
    env: string,
    logger: any,
    mahanakhon_geo: {
      latitude: number,
      longitude: number,
    },
    whether: {
      dark_sky_secret: string,
    },
    aws: {
      access_key_id: string,
      secret_access_key: string,
      region: string,
      s3_bucket: string,
    },
    email: {
      general: EmailSenderReceiver,
      group_booking: EmailSenderReceiver,
      corporate_booking: EmailSenderReceiver,
      private_events: EmailSenderReceiver,
      educational_programs: EmailSenderReceiver,
      media_visit: EmailSenderReceiver,
      filming_inquiry: EmailSenderReceiver,
      photography: EmailSenderReceiver,
      others: EmailSenderReceiver,
      career: EmailSenderReceiver,
    },
    postgres: {
        host: string,
        port: number,
        username: string,
        password: string,
        database: string,
    },
    jwt: {
        secret: string,
    },
    link: {
        ticketingLink: string,
    }
}

interface Provider {
    map(name: string): any
}

class EnvironmentProvider implements Provider {

    public map(name: string): any {
        return process.env[name]
    }
}

class ProviderFactory {
    private instances: { [key: string]: Provider } = {
        env: new EnvironmentProvider(),
    }

    public getProvider(name: string): Provider {
        return this.instances[name]
    }
}

export function loadConfigSync(): EnvironmentConfig {
    const env: string = process.env.NODE_ENV || "default"
    const pathFile: string = join(process.cwd(), "config", `${env}.json`)
    const conf: any = readJsonSync(pathFile)
    const provider = new ProviderFactory().getProvider("env")

    return travel(conf, (value: string) => {
        const found = value.match(/^\$\{([\w-]*)\|?:(.*)\}$/)

        if (!found || found.length === 0) {
            return value
        }
        return provider.map(found[2])
    })
}

export const configProviders = [{
    provide: CONFIG_ENV,
    useFactory: () => {
        return loadConfigSync()
    },
}]
