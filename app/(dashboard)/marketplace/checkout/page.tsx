"use client";

import IntroText from '@/components/IntroText'
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import { Device } from "@/public/data/device";
import { devices } from "@/public/data/device";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter, 
  DialogClose 
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Edit, Trash } from 'lucide-react';


const Page = () => {

  const [deviceList, setDeviceList] = useState<Device[]>(devices);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newDevice, setNewDevice] = useState<Device>({
    id: 0,
    name: '',
    type: '',
    support: '',
    mcu: '',
    status: 'Active',
    description: ''
  });

  const handleAddDevice = () => {
    setEditMode(false);
    setNewDevice({
      id: 0,
      name: '',
      type: '',
      support: '',
      mcu: '',
      status: 'Active',
      description: ''
    });
    setShowModal(true);
  };

  const handleSaveDevice = () => {
    if (editMode) {
      setDeviceList(deviceList.map((d) => 
        d.id === newDevice.id ? newDevice : d
      ));
    } else {
      const newDeviceToAdd: Device = {
        ...newDevice,
        id: deviceList.length > 0 
          ? Math.max(...deviceList.map(d => d.id)) + 1 
          : 1,
        status: 'Active'
      };
      setDeviceList([...deviceList, newDeviceToAdd]);
    }
    setShowModal(false);
  };

  const handleEditDevice = (device: Device) => {
    setEditMode(true);
    setNewDevice({...device});
    setShowModal(true);
  };

  const handleDeleteDevice = (deviceId: number) => {
    setDeviceList(deviceList.filter((d) => d.id !== deviceId));
  };

  return (
    <div>
      <IntroText 
      title="Connected Devices" 
      description="Add, manage, or remove IoT devices to track your farm in real time."
      />
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <Button onClick={handleAddDevice} className='bg-green-600'>Add New Device</Button>
        </CardHeader>
        <CardContent>
          {deviceList.length === 0 ? (
            <div className="text-center py-12 flex-column items-center justify-between">
              <div className="mx-auto w-154 h-154 text-gray-400 mb-4">
                <svg width="155" height="154" viewBox="0 0 155 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M84.7383 52.9961L96.1094 25.3281L96.1367 25.2422C96.9347 22.4106 97.0693 19.4332 96.5301 16.5412C95.9908 13.6492 94.7921 10.9204 93.0272 8.56677C91.2622 6.21314 88.9785 4.29801 86.3534 2.97013C83.7283 1.64224 80.8324 0.937336 77.8906 0.910156H77.7188C74.7902 0.910997 71.9008 1.58383 69.2732 2.87687C66.6455 4.16991 64.3496 6.04866 62.5622 8.3685C60.7748 10.6883 59.5435 13.3874 58.9632 16.2579C58.3829 19.1284 58.469 22.0938 59.2148 24.9258L70.3047 53.2969L52.9922 66.3906L33.1562 34.75H0.292969V36.3125H32.2813L51.7187 67.3359L19.4492 91.7461L30.8711 100.387L19.457 109.031L77.7148 153.094L135.973 109.031L124.547 100.391L135.973 91.75L84.7383 52.9961ZM63.8281 9.26172C66.328 6.04599 69.867 3.79818 73.8403 2.90242C77.8137 2.00666 81.9749 2.51855 85.6127 4.3506C89.2505 6.18265 92.1392 9.22116 93.7851 12.9469C95.431 16.6726 95.7321 20.8543 94.6367 24.7773L77.3008 66.9648L60.7031 24.4844C60.0116 21.8781 59.9339 19.147 60.4761 16.5057C61.0183 13.8643 62.1657 11.3847 63.8281 9.26172ZM52.5625 68.668L56.6563 75.2031C55.011 75.3991 53.3968 75.8007 51.8516 76.3984L51.6523 76.4805L51.3867 76.5898L50.7695 76.8477L50.9297 77.4922C50.9766 77.6953 51.0312 77.8828 51.0859 78.0977C51.7971 80.6925 53.0333 83.1138 54.7178 85.2118C56.4024 87.3097 58.4996 89.0396 60.8797 90.2944C63.2597 91.5493 65.8719 92.3023 68.5547 92.507C71.2375 92.7117 73.9337 92.3636 76.4766 91.4844V103.008H78.0391V91.4883C80.6316 92.376 83.3807 92.7133 86.1109 92.4786C88.8411 92.244 91.4923 91.4425 93.8953 90.1254C96.2983 88.8083 98.4002 87.0045 100.067 84.8293C101.733 82.654 102.928 80.1551 103.574 77.4922L103.73 76.8477L103.117 76.5898C100.719 75.582 98.1443 75.0592 95.5426 75.0517C92.941 75.0443 90.3636 75.5522 87.9593 76.5462C85.555 77.5403 83.3715 79.0007 81.5347 80.8432C79.6979 82.6858 78.2443 84.8739 77.2578 87.2813C75.7393 83.5695 73.1224 80.4106 69.7578 78.2281C66.3933 76.0456 62.442 74.9437 58.4336 75.0703L53.8281 67.7227L70.8984 54.8086L77.2734 71.1406L84.1406 54.4922L133.398 91.7461L77.7148 133.848L22.0312 91.7461L52.5625 68.668ZM60.9609 82.0781L62.2852 81.2461L59.3906 76.6094C63.2531 76.6867 66.9898 77.9962 70.0556 80.3467C73.1215 82.6972 75.3562 85.9658 76.4336 89.6758L76.3867 89.8438C74.0395 90.7148 71.5374 91.0907 69.0379 90.9477C66.5383 90.8048 64.0954 90.1461 61.8628 89.0131C59.6302 87.8801 57.6562 86.2973 56.065 84.3643C54.4739 82.4313 53.3 80.19 52.6172 77.7812C54.2112 77.184 55.8811 76.8132 57.5781 76.6797L60.9609 82.0781ZM78.0508 89.6992C78.7488 87.2968 79.9361 85.0646 81.5383 83.1431C83.1404 81.2216 85.1227 79.6523 87.3605 78.5338C89.5983 77.4152 92.0433 76.7716 94.5418 76.6435C97.0404 76.5153 99.5384 76.9053 101.879 77.7891C101.198 80.1992 100.025 82.4422 98.4347 84.3769C96.8443 86.3117 94.8706 87.8962 92.6378 89.0307C90.405 90.1653 87.9615 90.8253 85.4611 90.9693C82.9607 91.1133 80.4576 90.738 78.1094 89.8672L78.0508 89.6992ZM133.383 109.031L77.7148 151.129L22.0312 109.031L32.1875 101.367L77.7266 135.809L123.266 101.367L133.383 109.031Z" fill="#989898"/>
                  <path d="M77.7149 30.5157C80.6841 30.5282 83.5366 29.3606 85.645 27.2698C87.7533 25.1791 88.9447 22.3365 88.9571 19.3673C88.9696 16.3981 87.802 13.5456 85.7113 11.4373C83.6205 9.32896 80.7779 8.13753 77.8087 8.1251H77.711C74.7419 8.11267 71.8893 9.28024 69.781 11.371C67.6727 13.4617 66.4813 16.3044 66.4688 19.2735C66.4564 22.2427 67.624 25.0952 69.7147 27.2035C71.8055 29.3119 74.6481 30.5033 77.6173 30.5157H77.7149ZM68.0782 19.2384C68.1029 16.6995 69.1286 14.273 70.9323 12.4861C72.736 10.6992 75.1721 9.69632 77.711 9.69541H77.797C79.7019 9.71247 81.559 10.294 83.1334 11.3664C84.7079 12.4388 85.929 13.9539 86.6425 15.7203C87.3559 17.4867 87.5296 19.4249 87.1416 21.29C86.7535 23.155 85.8212 24.8631 84.4625 26.1984C83.1038 27.5336 81.3796 28.436 79.5081 28.7915C77.6366 29.1469 75.7017 28.9395 73.948 28.1954C72.1944 27.4513 70.7007 26.2039 69.6559 24.611C68.6111 23.0181 68.0621 21.1511 68.0782 19.2462V19.2384Z" fill="#989898"/>
                  <path d="M154.719 51.2148H122.297V52.7773H154.719V51.2148Z" fill="#989898"/>
                  <path d="M154.719 57.0742H122.297V58.6367H154.719V57.0742Z" fill="#989898"/>
                  <path d="M154.719 62.9336H146.059V64.4961H154.719V62.9336Z" fill="#989898"/>
                  <path d="M141.727 64.5L141.703 62.9375C135.297 63.0234 128.59 63.0234 122.309 62.9375L122.285 64.5C125.434 64.543 128.688 64.5625 131.957 64.5625C135.227 64.5625 138.516 64.5391 141.727 64.5Z" fill="#989898"/>
                  <path d="M154.719 68.793H122.297V70.3555H154.719V68.793Z" fill="#989898"/>
                  <path d="M32.7148 17.1641H0.292969V18.7266H32.7148V17.1641Z" fill="#989898"/>
                  <path d="M32.7148 23.0234H0.292969V24.5859H32.7148V23.0234Z" fill="#989898"/>
                  <path d="M32.7148 28.8828H24.0547V30.4453H32.7148V28.8828Z" fill="#989898"/>
                  <path d="M19.7188 30.4453V28.8828C13.3125 28.9687 6.60156 28.9687 0.320312 28.8828V30.4453C3.46875 30.4883 6.72266 30.5117 9.99219 30.5117C13.2617 30.5117 16.5078 30.4883 19.7188 30.4453Z" fill="#989898"/>
                </svg>
              </div>
              <p className="text-gray-500 mb-4">No devices connected yet.</p>
              <Button onClick={handleAddDevice} className='bg-green-600'>Connect First IoT Device</Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table className="w-full border">
                <TableHeader className='bg-grey-200'>
                  <TableRow>
                    <TableHead >#</TableHead >
                    <TableHead >Device Name</TableHead >
                    <TableHead >Device Type</TableHead >
                    <TableHead >Support</TableHead >
                    <TableHead >Type of MCU</TableHead >
                    <TableHead >Status</TableHead >
                    <TableHead >Actions</TableHead >
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deviceList.map((device, index) => (
                    <TableRow key={device.id}>
                      < TableCell >{index + 1}</ TableCell >
                      < TableCell >{device.name}</ TableCell >
                      < TableCell >{device.type}</ TableCell >
                      < TableCell >{device.support}</ TableCell >
                      < TableCell >{device.mcu}</ TableCell >
                      < TableCell >
                        <span className={`px-2 py-1 rounded-full text-xs ${device.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'}`}>
                          {device.status}
                        </span>
                      </ TableCell >
                      < TableCell >
                        <Button variant="outline" size="icon" onClick={() => handleEditDevice(device)}>
                          <Edit size={16} />
                        </Button>
                        <Button variant="destructive" size="icon" onClick={() => handleDeleteDevice(device.id)}>
                          <Trash size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editMode ? 'Edit Device' : 'Add New Device'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Device Name</label>
              <Input
                value={newDevice.name}
                onChange={(e) => setNewDevice({ ...newDevice, name: e.target.value })}
                placeholder="Enter device name"
              />
            </div>
            
            <div>
              <label className="block mb-2">Device Type</label>
              <Select 
                value={newDevice.type} 
                onValueChange={(value) => setNewDevice({ ...newDevice, type: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select device type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Temperature sensor">Temperature Sensor</SelectItem>
                  <SelectItem value="Humidity sensor">Humidity Sensor</SelectItem>
                  <SelectItem value="Station">Station</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block mb-2">Support</label>
              <Input
                value={newDevice.support}
                onChange={(e) => setNewDevice({ ...newDevice, support: e.target.value })}
                placeholder="Enter support details"
              />
            </div>

            <div>
              <label className="block mb-2">MCU Type</label>
              <Input
                value={newDevice.mcu}
                onChange={(e) => setNewDevice({ ...newDevice, mcu: e.target.value })}
                placeholder="Enter MCU type"
              />
            </div>

            <div>
              <label className="block mb-2">Description</label>
              <Textarea
                value={newDevice.description}
                onChange={(e) => setNewDevice({ ...newDevice, description: e.target.value })}
                placeholder="Enter device description"
                className="min-h-[100px] w-full border rounded px-3 py-2"
              />
            </div>
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="destructive" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
            </DialogClose>
            <Button onClick={handleSaveDevice} className='bg-green-200'>
              {editMode ? 'Save Changes' : 'Add Device'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
        <IntroText title="Checkout" description="Choose your Payment method"/>
      
    </div>
  )
}

export default Page