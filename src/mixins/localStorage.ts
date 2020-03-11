export default class LocalStorage {

  static Create(key: string, data: any) {

    localStorage.setItem(key, JSON.stringify(data));

  }

  static Update(key: string, data: any) {

    this.Create(key, data);
    
  }

  static Read(key: string) {

    return localStorage.getItem(key);

  }

  static Exists(key: string) {

    return this.Read(key);

  }

  static Data(key: string) {

    const data: any = this.Read(key);
    return JSON.parse(data);

  }

  static Value(key: string, property: string) {

    let item: any = this.Read(key)
    let data: any = JSON.parse(item)
    let value: any = false

    Object.keys(data).map(i => { if(i === property) value = data[i] })

    return value

  }

  static Remove(key: string) {

    return localStorage.removeItem(key);

  }

  static Delete(key: string) {

    return this.Remove(key);

  }

}