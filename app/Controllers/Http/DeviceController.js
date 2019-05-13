'use strict'

const Device = use('App/Models/Device')
const { validate } = use('Validator')

class DeviceController {
    async index ({ view }) {
        const devices = await Device.all()

        return view.render('devices.index', { devices: devices.toJSON() })
    }
    
    async store ({ request, response, session }) {
  // validate form input
  const validation = await validate(request.all(), {
    title: 'required|min:3|max:255'
  })

  // show error messages upon validation fail
  if (validation.fails()) {
    session.withErrors(validation.messages())
            .flashAll()

    return response.redirect('back')
  }

  // persist to database
  /*const device = new Device()
     device.firstName = request.input('firstName')
     device.lastName = request.input('lastName')
     device.deviceType = request.input('deviceType')
     device.serialNumber = request.input('serialNumber')
     device.coverageLength = request.input('coverageLength')
  await device.save()*/

    const firstName = request.input('firstName')
    const lastName = request.input('lastName')
    const deviceType = request.input('deviceType')
    const serialNumber = request.input('serialNumber')
    const coverageLength = request.input('coverageLength')

    const device = new Device()
    device.firstName = firstName
    device.lastName = lastName
    device.deviceType = deviceType
    device.serialNumber = serialNumber
    device.coverageLength = coverageLength
    

    await device.save()
    //return response.json(device)

  // Fash success message to session
  session.flash({ notification: 'Device Registered Successfully' })

  return response.redirect('back')
    }
    
  async destroy ({ params, session, response }) {
  const device = await Device.find(params.id)
  await device.delete()

  // Flash success message to session
  session.flash({ notification: 'Device Removed' })

  return response.redirect('back')
}
}

module.exports = DeviceController