// Dữ liệu portfolio. Thêm ảnh mới: đặt ảnh gốc vào source-images/portfolio, chạy `npm run images`, rồi thêm một dòng vào `photos`.
// widths = các kích thước WebP đã tạo ở public/images/portfolio/<id>-<width>.webp
const base = '/images/portfolio';

export const photos = [
  { id: 'ao-dai-bougainvillea', w: 2048, h: 1365, widths: [640, 1200, 2000], cat: 'hoian',
    alt: { vi: 'Cặp đôi mặc áo dài dắt tay nhau đi dưới giàn hoa giấy ở phố cổ Hội An', en: 'A couple in traditional ao dai walking hand in hand beneath bougainvillea in Hoi An old town' } },
  { id: 'alley', w: 2048, h: 1365, widths: [640, 1200, 2000], cat: 'couples',
    alt: { vi: 'Cặp đôi nắm tay cười với nhau trong con hẻm tường vàng', en: 'A couple holding hands and laughing in a narrow alley with yellow walls' } },
  { id: 'umbrella-street', w: 1365, h: 2048, widths: [640, 1200], cat: 'hoian',
    alt: { vi: 'Cặp đôi mặc trang phục truyền thống, cầm ô giấy trước dãy nhà vàng', en: 'A couple in traditional dress with a paper parasol before a yellow shopfront' } },
  { id: 'lantern-portrait', w: 2048, h: 1365, widths: [640, 1200, 2000], cat: 'moments',
    alt: { vi: 'Chân dung người phụ nữ giữa những chiếc đèn lồng nhiều màu', en: 'Portrait of a woman among colourful silk lanterns' } },
  { id: 'rice-field', w: 2048, h: 1365, widths: [640, 1200, 2000], cat: 'couples',
    alt: { vi: 'Cặp đôi ôm hôn giữa cánh đồng lúa xanh vàng lúc hoàng hôn', en: 'A couple embracing in a golden-green rice field at sunset' } },
  { id: 'kiss-street', w: 2048, h: 1365, widths: [640, 1200, 2000], cat: 'hoian',
    alt: { vi: 'Cặp đôi hôn nhau trước ngôi nhà vàng và dãy đèn lồng đỏ', en: 'A couple kissing in front of a yellow house and red lanterns' } },
  { id: 'ring-detail', w: 2048, h: 1365, widths: [640, 1200, 2000], cat: 'moments',
    alt: { vi: 'Cận cảnh đôi tay nắm chặt và chiếc nhẫn kim cương', en: 'Close-up of clasped hands and a diamond ring' } },
  { id: 'umbrella-yellow-house', w: 2048, h: 1365, widths: [640, 1200, 2000], cat: 'hoian',
    alt: { vi: 'Cặp đôi dưới chiếc ô trắng trước ngôi nhà vàng và những chiếc đèn lồng hồng', en: 'A couple beneath a white parasol before a yellow house hung with pink lanterns' } },
  { id: 'field-portrait', w: 1365, h: 2048, widths: [640, 1200], cat: 'couples',
    alt: { vi: 'Cặp đôi cười rạng rỡ trên cánh đồng lúa', en: 'A couple laughing together in a rice field' } },
  { id: 'river-boat', w: 2048, h: 1365, widths: [640, 1200, 2000], cat: 'hoian',
    alt: { vi: 'Người phụ nữ ngồi trên thuyền gỗ bên dòng sông Hội An phản chiếu hàng dừa', en: 'A woman seated on a wooden boat on the Hoi An river, palm trees reflected in the water' } },
  { id: 'beach-twirl', w: 2048, h: 1365, widths: [640, 1200, 2000], cat: 'couples',
    alt: { vi: 'Cặp đôi nắm tay xoay tròn, cười rạng rỡ trên bãi cát lúc hoàng hôn', en: 'A couple spinning hand in hand, laughing on the sand at golden hour' } },
  { id: 'temple-courtyard', w: 2048, h: 1365, widths: [640, 1200, 2000], cat: 'hoian',
    alt: { vi: 'Cặp đôi đứng giữa sân hội quán cổ với những dãy chậu cây', en: 'A couple standing in the courtyard of an old assembly hall lined with potted trees' } },
  { id: 'grass-seated', w: 2048, h: 1365, widths: [640, 1200, 2000], cat: 'couples',
    alt: { vi: 'Cặp đôi ngồi cạnh nhau trên bãi cỏ dưới bầu trời trắng', en: 'A couple sitting side by side on a grassy field under a pale sky' } },
  { id: 'yellow-wall', w: 2048, h: 1365, widths: [640, 1200, 2000], cat: 'moments',
    alt: { vi: 'Mẹ và con trai sánh bước bên bức tường vàng cũ', en: 'A mother and son walking along an old yellow wall' } },
  { id: 'rooftops', w: 2048, h: 1365, widths: [640, 1200, 2000], cat: 'moments',
    alt: { vi: 'Mẹ và con trai trên ban công nhìn xuống những mái ngói phố cổ Hội An', en: 'A mother and son on a balcony above the tiled rooftops of Hoi An' } },
];

export const photoById = Object.fromEntries(photos.map((p) => [p.id, p]));

export const src = (id, width) => `${base}/${id}-${width}.webp`;

export const srcSet = (photo) => photo.widths.map((w) => `${src(photo.id, w)} ${w}w`).join(', ');

export const largest = (photo) => src(photo.id, photo.widths[photo.widths.length - 1]);

export const categories = ['all', 'couples', 'hoian', 'moments'];
