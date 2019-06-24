'use strict'

const Device = use('App/Models/Device')
const { validate } = use('Validator')

class DeviceController {
    async index ({ view }) {
        const devices = await Device.all()

        return view.render('devices.index', { devices: devices.toJSON() })
    }
    
    async store ({ request, response, session }) {
const data = request.only(['firstName', 'lastName', 'deviceType', 'serialNumber', 'coverageLength'])
  // validate form input
  const validation = await validate(data, {
        firstName: 'required|min:3|max:255',
        lastName: 'required|min:3|max:255',
        deviceType: 'required|min:3|max:255',
        serialNumber: 'required|min:3|max:255',
        coverageLength: 'required|min:3|max:255'
  })

  // show error messages upon validation fail
 
  
  if (validation.fails()) {
    session.withErrors(validation.messages())
            .flashAll()

    return response.redirect('back')
  }

  // persist to database
  const device = new Device()
     device.firstName = request.input('firstName')
     device.lastName = request.input('lastName')
     device.deviceType = request.input('deviceType')
     device.serialNumber = request.input('serialNumber')
     device.coverageLength = request.input('coverageLength')

    /*const firstName = request.input('firstName')
    const lastName = request.input('lastName')
    const deviceType = request.input('deviceType')
    const serialNumber = request.input('serialNumber')
    const coverageLength = request.input('coverageLength')

    const device = new Device()
    device.firstName = firstName
    device.lastName = lastName
    device.deviceType = deviceType
    device.serialNumber = serialNumber
    device.coverageLength = coverageLength*/
    
    //return response.json(device)

  // Fash success message to session
  
await Device.create(data)     
session.flash({ notification: 'Device Registered Successfully' })

  return response.redirect('back')
    }
    
 async edit({ params, view }) {
        const devices = await Device.findOrFail (params.id)

        return view.render('devices.edit', { devices: devices.toJSON() })
    }
    
    async update ({ params, session, request, response}) {
const data = request.only(['firstName', 'lastName', 'deviceType', 'serialNumber', 'coverageLength'])
    
const validation = await validate(data, {
        firstName: 'required|min:3|max:255',
        lastName: 'required|min:3|max:255',
        deviceType: 'required|min:3|max:255',
        serialNumber: 'required|min:3|max:255',
        coverageLength: 'required|min:3|max:255'
  })

if (validation.fails()) {
    session.withErrors(validation.messages())
            .flashAll()

    return response.redirect('back')
  }
    
const device = await Device.findOrFail(params.id)
   device.merge(data)
   await device.save()

return response.redirect('/')

}
    
  async destroy ({ params, session, response }) {
  const device = await Device.findOrFail(params.id)
  await device.delete()

  // Flash success message to session
  session.flash({ notification: 'Device Removed' })

  return response.redirect('back')
}
}

module.exports = DeviceController