// Thông tin doanh nghiệp — giữ nguyên theo brief, không chỉnh sửa tự ý.
export const site = {
  brand: 'Tee.Photography',
  fullName: 'Tee.Photography in Hoi An',
  contactName: 'Trần Trung Toàn Thiện',
  phoneDisplay: '090 555 0417',
  phoneTel: 'tel:0905550417',
  phoneRaw: '0905550417',
  address: '13A Nguyễn Hoàng, An Hội, Hội An, Đà Nẵng, Việt Nam',
  facebook: 'https://www.facebook.com/tee.photographyinhoian/photos',
  maps: 'https://maps.app.goo.gl/EFgnh8WavwG6dUti8',
  // Điền URL dịch vụ nhận form (Formspree, Getform, backend riêng...) vào .env: VITE_FORM_ENDPOINT=...
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
};
