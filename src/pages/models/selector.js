export default {
  namespace: 'selector',
  state: {
    platform: {
      name: "平台",
      data: {
        "0": "不限",
        "windows": "微软Windows",
        "linux": "Linux",
        "cisco": "思科Cisco",
        "huawei": "华为Huawei",
      },
    },
    important: {
      name: "设备重要性",
      data: {
        "0": "不限",
        "1": "网络核心设备",
        "2": "网络非核心设备",
        "3": "核心服务器设备",
        "4": "非核心服务器设备",
        "5": "其他不重要设备",
      },
    },
  }
}