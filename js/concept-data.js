// =============================================================================
// HỌC PHẦN: TƯ TƯỞNG HỒ CHÍ MINH (HCM202) — NHÓM THỰC HIỆN: GROUP7
// DỮ LIỆU BẢN ĐỒ KHÁI NIỆM (CONCEPT MAP): "NGƯỜI CẦM LÁI"
// Căn cứ lý luận:
// 1. Giáo trình Tư tưởng Hồ Chí Minh, Bộ GD&ĐT, Nxb CTQG Sự thật, Hà Nội, 2021 (tr. 69–78).
// 2. Hồ Chí Minh: Toàn tập (15 tập), Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011.
// =============================================================================

(() => {
const N = (title, children, relation = 'gồm') => ({ title, children, relation });
const L = (title, body, source, quote = '', image = '', imageCaption = '') => ({ title, body, source, quote, image, imageCaption });

const data = [
  N('I. Tính tất yếu & vai trò lãnh đạo của Đảng', [
    N('1. Vai trò “Người cầm lái” cho sự nghiệp cách mạng', [
      L(
        'Sức mạnh quần chúng cần sự lãnh đạo tiên phong',
        [
          'Lực lượng của giai cấp công nhân và nhân dân lao động là vô cùng to lớn. Tuy nhiên, lực lượng ấy chỉ chuyển hóa thành sức mạnh cách mạng hiện thực khi được một chính đảng cách mạng chân chính giác ngộ, tập hợp và tổ chức.',
          'Hồ Chí Minh khẳng định: giai cấp mà không có Đảng lãnh đạo thì không thể làm cách mạng thành công. Ở đây, vai trò lãnh đạo gắn liền với việc định hướng mục tiêu, giác ngộ lý luận và tổ chức lực lượng, hoàn toàn không tách rời vai trò làm chủ của quần chúng nhân dân.',
          'Phân tích của nhóm (GROUP7): Quần chúng là người sáng tạo ra lịch sử, nhưng nếu thiếu ngọn cờ dẫn đường và tổ chức chặt chẽ của Đảng cầm lái, phong trào đấu tranh sẽ dừng lại ở mức tự phát, phân tán và dễ bị tổn thương trước sự đàn áp của giai cấp thống trị.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 2, tr. 288–289; Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 69.'
      ),
      L(
        'Đảng tổ chức lực lượng trong nước và gắn kết quốc tế',
        [
          'Trong tác phẩm Đường cách mệnh (1927), Hồ Chí Minh luận giải sự cần thiết tất yếu của một đảng cách mệnh: Về đối nội, Đảng có sứ mệnh vận động, giác ngộ và tổ chức đông đảo quần chúng nhân dân; về đối ngoại, Đảng chủ động liên lạc với phong trào giải phóng dân tộc và giai cấp vô sản trên toàn thế giới.',
          'Vai trò của Đảng vì vậy thể hiện trọn vẹn ở cả hai phương diện: quy tụ khối đại đoàn kết toàn dân tộc và kết hợp sức mạnh dân tộc với sức mạnh thời đại.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 2, tr. 289 (tác phẩm Đường cách mệnh); Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 69.'
      ),
      L(
        'Đảng vững thì cách mạng mới thành công',
        [
          'Hình tượng “Người cầm lái” nhấn mạnh vai trò định hướng chiến lược và năng lực tổ chức của Đảng. Sự vững vàng về lập trường chính trị, trong sạch về đạo đức và chặt chẽ về tổ chức là điều kiện tiên quyết bảo đảm thắng lợi của cách mạng.',
          'Cũng như người cầm lái có vững tay chèo thì con thuyền mới vượt qua được phong ba bão táp, Đảng có vững thì phong trào cách mạng mới giữ vững định hướng độc lập dân tộc gắn liền với chủ nghĩa xã hội.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 2, tr. 289; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 69.',
        '“Cách mệnh trước hết phải có cái gì? Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp ở mọi nơi. Đảng có vững cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy.”'
      ),
      L(
        'Vai trò lãnh đạo xuyên suốt tiến trình cách mạng',
        [
          'Quan điểm coi Đảng như người cầm lái được Hồ Chí Minh khẳng định nhất quán từ cách mạng giải phóng dân tộc đến cách mạng xã hội chủ nghĩa.',
          'Sứ mệnh lãnh đạo của Đảng bắt nguồn từ chính đòi hỏi khách quan của lịch sử Việt Nam: chỉ có Đảng Cộng sản Việt Nam mới có đủ năng lực lý luận, uy tín và sự kiên trung để chèo lái đất nước vượt qua nghèo nàn, lạc hậu, bảo vệ vững chắc nền độc lập và xây dựng cuộc sống ấm no cho nhân dân.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 69–70.'
      )
    ], 'được thể hiện qua'),

    N('2. Ba yếu tố hình thành Đảng Cộng sản Việt Nam', [
      L(
        'Sự phát triển sáng tạo lý luận Mác – Lênin về đảng kiểu mới',
        [
          'Theo học thuyết Mác – Lênin, đảng cộng sản thông thường là sản phẩm của sự kết hợp giữa chủ nghĩa xã hội khoa học với phong trào công nhân.',
          'Vận dụng sáng tạo vào điều kiện cụ thể của một nước thuộc địa nửa phong kiến, Hồ Chí Minh chỉ rõ Đảng Cộng sản Việt Nam ra đời từ sự kết hợp của ba yếu tố: Chủ nghĩa Mác – Lênin, phong trào công nhân và phong trào yêu nước.',
          'Phân tích của nhóm (GROUP7): Việc bổ sung “phong trào yêu nước” là cống hiến lý luận to lớn và sáng tạo xuất sắc của Hồ Chí Minh, phù hợp với thực tiễn Việt Nam - nơi mâu thuẫn dân tộc sâu sắc hơn mâu thuẫn giai cấp, và chủ nghĩa yêu nước là ngọn cờ tập hợp sức mạnh của toàn thể giống nòi.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 70; Hồ Chí Minh: Toàn tập, 2011, t. 12, tr. 403.'
      ),
      L(
        'Chủ nghĩa Mác – Lênin: Nền tảng tư tưởng dẫn đường',
        [
          'Chủ nghĩa Mác – Lênin là hệ tư tưởng tiên tiến nhất của thời đại, cung cấp thế giới quan và phương pháp luận khoa học để giải phóng dân tộc và con người.',
          'Quá trình truyền bá chủ nghĩa Mác – Lênin vào Việt Nam đã giúp các chiến sĩ yêu nước chuyển từ khuynh hướng cứu nước theo ý thức hệ phong kiến hoặc dân chủ tư sản sang lập trường cách mạng vô sản một cách vững chắc từ năm 1925 trở đi.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 70.'
      ),
      L(
        'Phong trào công nhân: Cơ sở giai cấp tiên phong',
        [
          'Giai cấp công nhân Việt Nam tuy số lượng chưa đông nhưng sớm tiếp thu chủ nghĩa Mác – Lênin, đại diện cho phương thức sản xuất tiên tiến và có tinh thần cách mạng triệt để nhất.',
          'Trong thực tiễn cách mạng Việt Nam, phong trào công nhân nhanh chóng chuyển từ tự phát sang tự giác, tự nguyện gánh vác sứ mệnh lãnh đạo sự nghiệp giải phóng dân tộc và giải phóng giai cấp.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 70.'
      ),
      L(
        'Phong trào yêu nước: Chiều sâu cội nguồn dân tộc',
        [
          'Chủ nghĩa yêu nước là sợi chỉ đỏ xuyên suốt lịch sử hàng nghìn năm dựng nước và giữ nước của dân tộc Việt Nam. Khi đất nước bị đô hộ, phong trào yêu nước bùng nổ mạnh mẽ trong mọi tầng lớp nhân dân.',
          'Sự xuất hiện của Hội Việt Nam Cách mạng Thanh niên do Nguyễn Ái Quốc sáng lập năm 1925 đã trực tiếp thức tỉnh và tập hợp phong trào yêu nước vào quỹ đạo cách mạng vô sản.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 70.'
      )
    ], 'hình thành từ sự kết hợp của'),

    N('3. Tính tất yếu lịch sử của Đảng Cộng sản Việt Nam', [
      L(
        'Yêu cầu khách quan của lịch sử dân tộc',
        [
          'Trong xã hội thuộc địa nửa phong kiến, mâu thuẫn chủ yếu và gay gắt nhất là mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược và tay sai phản động.',
          'Các phong trào cứu nước theo hệ tư tưởng phong kiến (như Cần Vương) và dân chủ tư sản (như Đông Kinh Nghĩa Thục, khởi nghĩa Yên Bái) lần lượt thất bại vì khủng hoảng đường lối cứu nước. Sự ra đời của Đảng Cộng sản Việt Nam đầu năm 1930 là câu trả lời tất yếu cho sứ mệnh giải phóng dân tộc.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 70.'
      ),
      L(
        'Vị trí, vai trò to lớn của phong trào yêu nước',
        [
          'Phong trào yêu nước ở Việt Nam có nền tảng xã hội sâu rộng, bao gồm nhiều tầng lớp và giai cấp xã hội khác nhau. Dù khác biệt về phương thức đấu tranh, mọi lực lượng yêu nước chân chính đều có cùng khát vọng giành lại độc lập, tự do cho Tổ quốc.',
          'Chính sức mạnh truyền thống yêu nước bền bỉ đã tạo điều kiện thuận lợi để lý luận Mác – Lênin nhanh chóng bén rễ và lan tỏa sâu rộng trong lòng dân tộc.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 70.'
      ),
      L(
        'Sự thống nhất mục tiêu giữa công nhân và các lực lượng yêu nước',
        [
          'Tại Việt Nam, lợi ích tối cao của giai cấp công nhân hoàn toàn thống nhất với lợi ích sống còn của toàn thể dân tộc: giành lại chủ quyền quốc gia, xóa bỏ áp bức bóc lột, đem lại hạnh phúc cho nhân dân.',
          'Sự thống nhất về mục tiêu cơ bản này tạo tiền đề vững chắc cho việc xây dựng khối liên minh cách mạng rộng lớn do Đảng lãnh đạo.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 70.'
      ),
      L(
        'Phong trào nông dân kết hợp với phong trào công nhân',
        [
          'Ở Việt Nam, nông dân chiếm hơn 90% dân số, là lực lượng chịu hai tầng áp bức nặng nề nhất của đế quốc và phong kiến. Hồ Chí Minh xác định công nhân và nông dân là hai lực lượng đông đảo nhất, kiên quyết nhất, là “gốc của cách mệnh”.',
          'Sự gắn kết tự nhiên giữa phong trào nông dân và phong trào công nhân đã tạo nên nền tảng của khối liên minh công – nông. Đây là cơ sở xã hội trực tiếp cho sự ra đời và củng cố quyền lãnh đạo của Đảng Cộng sản Việt Nam.',
          'Phân tích của nhóm (GROUP7): Nếu không có sự tham gia của hàng triệu nông dân, cách mạng không có lực lượng áp đảo; ngược lại nếu phong trào nông dân không có giai cấp công nhân và chính đảng tiền phong dẫn đường thì phong trào dù quật khởi cũng không thoát khỏi bế tắc lịch sử.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 2, tr. 288 (tác phẩm Đường cách mệnh); Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 70.',
        '“Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, điền chủ nhỏ... là bầu bạn cách mệnh của công nông.”'
      ),
      L(
        'Phong trào yêu nước của trí thức thúc đẩy sự kết hợp',
        [
          'Tầng lớp trí thức, tiểu tư sản yêu nước là bộ phận nhạy bén với thời cuộc, đón nhận sớm nhất ánh sáng của chủ nghĩa Mác – Lênin và đóng vai trò cầu nối lịch sử.',
          'Thông qua tổ chức Hội Việt Nam Cách mạng Thanh niên (1925), báo Thanh Niên và chủ trương “vô sản hóa” (1928), các trí thức yêu nước đã tự nguyện thâm nhập vào các nhà máy, hầm mỏ để truyền bá lý luận cách mạng, trực tiếp thúc đẩy sự chuyển hóa của phong trào công nhân từ tự phát sang tự giác.',
          'Phân tích của nhóm (GROUP7): Trí thức yêu nước là chất xúc tác đặc biệt quan trọng giúp chủ nghĩa Mác – Lênin kết hợp sâu sắc với phong trào công nhân và phong trào yêu nước, dẫn tới bước ngoặt hợp nhất thành lập Đảng Cộng sản Việt Nam vào mùa xuân năm 1930.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 2, tr. 275–320; Văn kiện Đảng toàn tập, Nxb Chính trị quốc gia, Hà Nội, 1998, t. 1, tr. 1–28; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 70.'
      )
    ], 'được lý giải từ')
  ], 'được làm rõ qua'),

  N('II. Đảng phải trong sạch, vững mạnh', [
    N('a. Bản chất: Đảng là đạo đức, là văn minh', [
      L(
        'Đạo đức là cái gốc, nền tảng của người cách mạng',
        [
          'Tại Lễ kỷ niệm 30 năm ngày thành lập Đảng (1960), Hồ Chí Minh khẳng định: “Đảng ta là đạo đức, là văn minh”. Người coi đạo đức cách mạng là cái gốc, là nền tảng tinh thần của người cách mạng cũng như sông có nguồn thì mới có nước, cây có gốc mới đâm chồi nảy lộc.',
          'Xây dựng Đảng có đạo đức cách mạng cũng chính là xây dựng một Đảng văn minh, một tổ chức cách mạng chân chính đại diện cho lương tâm, danh dự và phẩm giá của dân tộc Việt Nam.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 12, tr. 403; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 70–71.',
        '“Đảng ta là đạo đức, là văn minh, là thống nhất, độc lập, là hòa bình ấm no.”'
      ),
      L(
        'Mục đích hoạt động vì độc lập dân tộc và hạnh phúc nhân dân',
        [
          'Đảng Cộng sản Việt Nam không có mục đích tự thân, không tìm kiếm đặc quyền đặc lợi cho riêng mình. Mục đích duy nhất của Đảng là lãnh đạo đấu tranh giải phóng dân tộc, giải phóng giai cấp, giải phóng xã hội và giải phóng con người.',
          'Mục tiêu của Đảng là làm cho Tổ quốc hoàn toàn độc lập, đồng bào ai cũng có cơm ăn, áo mặc, ai cũng được học hành, xây dựng mối quan hệ đoàn kết, hòa bình, hữu nghị với nhân dân tiến bộ toàn thế giới.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 70–71.'
      ),
      L(
        'Cương lĩnh, đường lối vì lợi ích tối cao của dân tộc',
        [
          'Cương lĩnh, đường lối, chủ trương và chính sách của Đảng phải xuất phát từ thực tiễn khách quan, phù hợp với quy luật phát triển của xã hội Việt Nam và phục vụ lợi ích tối cao của toàn dân tộc.',
          'Trong giai đoạn cầm quyền, Đảng lãnh đạo Nhà nước và xã hội nhưng Đảng hoạt động nghiêm túc trong khuôn khổ Hiến pháp và pháp luật, chịu sự giám sát của nhân dân và không có bất kỳ tổ chức, cá nhân đảng viên nào được đứng trên pháp luật.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 71–72.'
      ),
      L(
        'Đội ngũ đảng viên gương mẫu, cần kiệm liêm chính',
        [
          'Đảng viên phải thấm nhuần sâu sắc đạo đức cách mạng, suốt đời hy sinh phấn đấu vì mục tiêu của Đảng, của dân tộc. Phẩm chất cốt lõi gồm: cần, kiệm, liêm, chính, chí công vô tư; trung với nước, hiếu với dân; thương yêu đồng chí, đồng bào.',
          'Người đảng viên phải tiên phong, gương mẫu, “đảng viên đi trước, làng nước theo sau”; không bị tiền tài quyến rũ, không bị nghèo khó chuyển lay, không bị uy lực khuất phục, tận tâm phụng sự Tổ quốc.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 7, tr. 50; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 71–72.'
      ),
      L(
        'Đoàn kết quốc tế trong sáng và có nghĩa tình',
        [
          'Đảng văn minh là đảng kiên định chủ nghĩa quốc tế vô sản trong sáng, gắn độc lập dân tộc với chủ nghĩa quốc tế, tôn trọng độc lập, chủ quyền và lợi ích chính đáng của các quốc gia khác trên tinh thần hòa bình, hữu nghị, bình đẳng và cùng phát triển.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 71–72.'
      ),
      L(
        'Mối quan hệ gắn bó máu thịt với nhân dân',
        [
          'Đảng vừa là người lãnh đạo, vừa là người đầy tớ thật trung thành của nhân dân. Sự gắn bó máu thịt giữa Đảng với nhân dân là cội nguồn sức mạnh vô địch của Đảng.',
          'Xa rời nhân dân, quan liêu, tham nhũng, biến quyền lực của nhân dân trao phó thành đặc quyền đặc lợi cá nhân là con đường ngắn nhất dẫn tới sự sụp đổ của một chính đảng cầm quyền.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 71–72.'
      ),
      L(
        'Phân tích của nhóm: Bản chất đạo đức, văn minh của Đảng cầm quyền',
        [
          'Đảng văn minh tiêu biểu cho lương tâm, trí tuệ và danh dự của dân tộc. Đạo đức là nguồn gốc tinh thần bên trong, còn văn minh là sự thể hiện khoa học, hiện đại, nhân văn và thượng tôn pháp luật ra bên ngoài.',
          'Phân tích của nhóm (GROUP7): Vì sao vai trò lãnh đạo độc tôn lại đòi hỏi Đảng phải tuyệt đối trong sạch, vững mạnh? Quyền lực chính trị là con dao hai lưỡi: khi nắm chính quyền, đảng viên dễ bị tha hóa nếu thiếu sự tự rèn luyện và kiểm soát kỷ luật. Uy tín trong quá khứ không tự nhiên bảo đảm uy tín hiện tại nếu sa vào chủ nghĩa cá nhân. Vì vậy, xây dựng Đảng về đạo đức, văn minh chính là điều kiện sống còn để giữ vững vai trò “Người cầm lái”.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 71–72.'
      )
    ], 'thể hiện qua'),

    N('b. Nguyên tắc tổ chức và hoạt động của Đảng', [
      L(
        'Tập trung dân chủ: Nguyên tắc tổ chức cơ bản nhất',
        [
          'Tập trung phải dựa trên nền tảng dân chủ rộng rãi, và dân chủ phải đi đến sự tập trung thống nhất về ý chí và hành động. Đảng viên có quyền bàn bạc, thảo luận thẳng thắn; khi nghị quyết đã thông qua thì thiểu số phục tùng đa số, cấp dưới phục tùng cấp trên, toàn Đảng phục tùng Trung ương.',
          'Phân tích của nhóm (GROUP7): Tập thể lãnh đạo đi đôi với cá nhân phụ trách. Tập thể lãnh đạo để phát huy trí tuệ sáng suốt; cá nhân phụ trách để xác định rõ trách nhiệm, ngăn chặn thói đùn đẩy hoặc tình trạng độc đoán chuyên quyền làm tê liệt sức chiến đấu của tổ chức.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 5, tr. 280–309; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 73.',
        '',
        'img/nguyen-tac-tap-trung-dan-chu.png',
        'Sơ đồ nguyên lý: Dân chủ là cơ sở của tập trung — Tập trung trên cơ sở dân chủ. Hai yếu tố có quan hệ biện chứng chặt chẽ và thống nhất.'
      ),
      L(
        'Tự phê bình và phê bình: Quy luật phát triển của Đảng',
        [
          'Tự phê bình và phê bình là vũ khí sắc bén nhất để làm cho tổ chức Đảng và mỗi đảng viên ngày càng tiến bộ, trong sạch hơn. Công việc này phải được tiến hành thường xuyên, nghiêm túc như rửa mặt mỗi ngày.',
          'Thái độ phê bình phải thành khẩn, trung thực, mang tính xây dựng cao và xuất phát từ tình đồng chí thương yêu lẫn nhau; kiên quyết chống định kiến, trả thù hoặc nể nang, né tránh.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 5, tr. 280; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 73.',
        '“Dao có mài mới sắc. Vàng có luyện mới trong. Nước có lọc mới sạch. Người cách mạng muốn tiến bộ phải tự phê bình và phê bình thường xuyên.”'
      ),
      L(
        'Kỷ luật nghiêm minh và tự giác',
        [
          'Kỷ luật của Đảng là kỷ luật sắt, đòi hỏi mọi đảng viên từ cấp cao nhất đến đảng viên ở cơ sở đều bình đẳng trước điều lệ Đảng. Kỷ luật nghiêm minh bảo đảm cho Đảng một sự thống nhất cao độ về ý chí và hành động.',
          'Kỷ luật đó đồng thời phải dựa trên tinh thần tự giác cao của người đảng viên xuất phát từ sự giác ngộ lý tưởng cách mạng sâu sắc.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 73–74.'
      ),
      L(
        'Đoàn kết, thống nhất trong Đảng',
        [
          'Đoàn kết là truyền thống cực kỳ quý báu của Đảng và dân tộc ta. Đoàn kết nội bộ Đảng là hạt nhân để xây dựng khối đại đoàn kết toàn dân tộc.',
          'Cơ sở của sự đoàn kết nhất trí là chủ nghĩa Mác – Lênin, Cương lĩnh chính trị, Điều lệ Đảng và mục tiêu phụng sự Tổ quốc, phụng sự nhân dân.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 15, tr. 611–612 (Di chúc); Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 74–75.',
        '“Các đồng chí từ Trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình.”',
        'img/doan-ket-la-suc-manh-cua-dang.png',
        'Tranh cổ động: "Đoàn kết là sức mạnh của Đảng" — Giữ gìn sự đoàn kết nhất trí như giữ gìn con ngươi của mắt mình.'
      ),
      L(
        'Lấy chủ nghĩa Mác – Lênin làm nền tảng tư tưởng, kim chỉ nam',
        [
          'Đảng phải lấy chủ nghĩa Mác – Lênin làm gốc rễ tư tưởng định hướng cho mọi đường lối và hành động cách mạng.',
          'Trung thành với nguyên lý Mác – Lênin phải luôn đi liền với sáng tạo, vận dụng linh hoạt vào hoàn cảnh lịch sử cụ thể của Việt Nam qua từng thời kỳ cách mạng, kiên quyết chống giáo điều và rập khuôn.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 2, tr. 289; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 72–73.',
        '“Đảng muốn vững thì phải có chủ nghĩa làm cốt, trong đảng ai cũng phải hiểu, ai cũng phải theo chủ nghĩa ấy. Đảng mà không có chủ nghĩa cũng như người không có trí khôn, tàu không có bàn chỉ nam.”'
      ),
      L(
        'Thường xuyên tự đổi mới, tự chỉnh đốn Đảng',
        [
          'Quyền lực của Đảng do nhân dân ủy thác; Đảng không thể ỷ vào công lao quá khứ để tự mãn. Đứng trước những khúc quanh lịch sử và nhiệm vụ mới ngày càng nặng nề, Đảng bắt buộc phải không ngừng tự đổi mới và chỉnh đốn để đáp ứng yêu cầu phát triển.',
          'Tự chỉnh đốn nhằm loại bỏ những phần tử cơ hội, thoái hóa biến chất, đồng thời bồi dưỡng kết nạp những nhân tố ưu tú, giữ vững sinh lực và sức chiến đấu của Đảng.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 15, tr. 611; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 74.'
      ),
      L(
        'Liên hệ mật thiết với nhân dân',
        [
          'Đảng là một bộ phận gắn bó khăng khít trong lòng dân tộc. Cán bộ, đảng viên phải luôn lắng nghe ý kiến của nhân dân, thấu hiểu tâm tư, nguyện vọng chính đáng của dân và chịu sự giám sát nghiêm túc của dân.',
          'Phải kiên quyết khắc phục căn bệnh “quan cách mạng”, thói hách dịch, cửa quyền xâm phạm quyền làm chủ của nhân dân. Mất dân là mất tất cả.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 5, tr. 309; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 75–76.'
      ),
      L(
        'Đoàn kết quốc tế trong sáng',
        [
          'Đảng thực hiện đường lối quốc tế dựa trên nguyên tắc chủ nghĩa quốc tế vô sản, tôn trọng lẫn nhau, vì mục tiêu độc lập dân tộc, dân chủ, hòa bình và tiến bộ xã hội.',
          'Trong Di chúc, Hồ Chí Minh đặc biệt mong muốn Đảng ta nỗ lực hàn gắn và khôi phục tình đoàn kết giữa các đảng anh em trên nền tảng chủ nghĩa Mác – Lênin có lý, có tình.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 15, tr. 618; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 76.'
      )
    ], 'được bảo đảm bằng hệ thống'),

    N('c. Xây dựng đội ngũ cán bộ, đảng viên', [
      L(
        'Yêu cầu tổng quát: Cán bộ vừa có đức, vừa có tài (vừa hồng, vừa chuyên)',
        [
          'Hồ Chí Minh yêu cầu người cán bộ cách mạng phải có cả đức và tài, trong đó đức là gốc. Người có tài mà không có đức là người vô dụng; người có đức mà không có tài thì làm việc gì cũng khó.',
          'Đức và tài tạo thành một chỉnh thể thống nhất bảo đảm cán bộ đủ năng lực hoàn thành tốt nhiệm vụ được Đảng và nhân dân giao phó.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 5, tr. 280; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 76, 78.'
      ),
      N('Kiên quyết phòng, chống các biểu hiện tiêu cực', [
        L(
          'Nhận diện nguy cơ suy thoái và chủ nghĩa cá nhân',
          [
            'Hồ Chí Minh chỉ rõ: Chủ nghĩa cá nhân là kẻ thù hung ác của đạo đức cách mạng, là nguồn gốc đẻ ra hàng loạt căn bệnh nguy hiểm như tham ô, lãng phí, quan liêu, cục bộ, kiêu ngạo, tham danh trục lợi.',
            'Quan liêu, tham nhũng được Người coi là “giặc nội xâm”, nguy hiểm không kém gì giặc ngoại xâm vì nó phá hoại công cuộc cách mạng từ bên trong, làm xói mòn niềm tin của quần chúng nhân dân vào Đảng.'
          ],
          'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 7, tr. 356; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 77–78.'
        ),
        L(
          'Thẳng thắn nhận diện khuyết điểm và kiên quyết sửa chữa',
          [
            'Một Đảng giấu giếm khuyết điểm là một Đảng hỏng; một Đảng có gan thừa nhận khuyết điểm, vạch rõ những cái sai rồi tìm mọi cách để sửa chữa là một Đảng tiến bộ, mạnh dạn, chắc chắn và chân chính.',
            'Cán bộ, đảng viên phải có dũng khí đối diện với sự thật, cầu thị lắng nghe phê bình để hoàn thiện bản thân.'
          ],
          'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 5, tr. 301; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 77–78.'
        ),
        L(
          'Kết hợp phòng ngừa nghiêm ngặt, xử lý nghiêm minh và giáo dục nhân văn',
          [
            'Phương châm xử lý tiêu cực là phòng ngừa phải đi trước; khi xảy ra sai phạm phải xử lý nghiêm minh, đúng người, đúng kỷ luật Đảng và pháp luật của Nhà nước, không có ngoại lệ.',
            'Đồng thời, xử lý phải kết hợp với giáo dục, cải tạo con người có lý, có tình để người mắc sai lầm nhận ra khuyết điểm và phấn đấu sửa sai.'
          ],
          'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 15, tr. 546–548; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 78.'
        )
      ], 'đòi hỏi'),

      L(
        'Không ngừng học tập nâng cao trình độ về mọi mặt',
        [
          'Cán bộ, đảng viên phải không ngừng học tập lý luận chính trị, chuyên môn nghiệp vụ, khoa học kỹ thuật để thích ứng với đòi hỏi ngày càng cao của sự nghiệp cách mạng.',
          'Hồ Chí Minh căn dặn: Học để làm việc, làm người, làm cán bộ; học để phụng sự Đoàn thể, giai cấp và nhân dân, Tổ quốc và nhân loại.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 76–78.'
      ),
      L(
        'Gắn bó mật thiết, phát huy quyền làm chủ của nhân dân',
        [
          'Đảng viên phải gần dân, thấu hiểu đời sống nhân dân, thực hiện phương châm “trọng dân, gần dân, hiểu dân, học dân và có trách nhiệm với dân”.',
          'Phải tôn trọng quyền làm chủ thực sự của nhân dân, thực hiện khẩu hiệu: “Ăn trước thiên hạ, vui sau thiên hạ” (lo trước cái lo của thiên hạ, vui sau niềm vui của thiên hạ).'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 77.'
      ),
      L(
        'Nêu cao tinh thần trách nhiệm, năng động, sáng tạo',
        [
          'Cán bộ phải có tinh thần dấn thân, dám nghĩ, dám làm, dám chịu trách nhiệm vì lợi ích chung; chống thói ỷ lại, thụ động, đùn đẩy trách nhiệm.',
          'Trước khó khăn thử thách phải giữ vững khí tiết: “Thắng không kiêu, bại không nản”.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 77.'
      ),
      L(
        'Thường xuyên tu dưỡng, rèn luyện đạo đức cách mạng',
        [
          'Tu dưỡng đạo đức là quá trình suốt đời, bền bỉ như ngọc càng mài càng sáng, vàng càng luyện càng trong.',
          'Phải kiên quyết quét sạch chủ nghĩa cá nhân, nâng cao đạo đức cách mạng trong từng hành vi công vụ cũng như đời sống hằng ngày.'
        ],
        'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 15, tr. 546; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 77–78.'
      ),
      L(
        'Tuyệt đối trung thành với mục tiêu, lý tưởng của Đảng',
        [
          'Cán bộ, đảng viên phải tuyệt đối trung thành với Đảng, với Tổ quốc và nhân dân. Đặt lợi ích của Tổ quốc và nhân dân lên trên hết, trước hết.',
          'Khi lợi ích cá nhân mâu thuẫn với lợi ích của cách mạng, phải sẵn sàng hy sinh lợi ích riêng vì sự nghiệp chung của Đảng và dân tộc.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 76–77.'
      ),
      L(
        'Chấp hành nghiêm chỉnh đường lối, nghị quyết và kỷ cương',
        [
          'Đảng viên phải gương mẫu thực hiện và vận động nhân dân chấp hành Cương lĩnh, Điều lệ Đảng, các nghị quyết, chỉ thị của Đảng và pháp luật của Nhà nước.',
          'Tính tiên phong của tổ chức Đảng được hiện thực hóa sinh động qua tính kỷ luật và sự gương mẫu của từng đảng viên cụ thể.'
        ],
        'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 77.'
      ),

      N('Công tác cán bộ — “Cái gốc của mọi công việc”', [
        L(
          'Vị trí, vai trò quyết định của công tác cán bộ',
          [
            'Hồ Chí Minh đặc biệt coi trọng vị trí then chốt của cán bộ: “Cán bộ là cái gốc của mọi công việc”. Cán bộ là cầu nối giữa Đảng với nhân dân: giải thích đường lối của Đảng cho dân hiểu, dân làm; đồng thời phản ánh tâm tư của dân lên Đảng để hoạch định chính sách.',
            'Chất lượng và uy tín của đội ngũ cán bộ có ý nghĩa trực tiếp quyết định sự thành bại của toàn bộ sự nghiệp cách mạng.'
          ],
          'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 5, tr. 280, 309; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 78.',
          '“Cán bộ là cái gốc của mọi công việc... Muôn việc thành công hoặc thất bại, đều do cán bộ tốt hoặc kém.”'
        ),
        L(
          'Hiểu, đánh giá, đào tạo, đề bạt và bố trí cán bộ đúng',
          [
            'Công tác cán bộ bao gồm một quy trình liên hoàn: phải hiểu và đánh giá đúng phẩm chất, sở trường của cán bộ; đào tạo, huấn luyện cán bộ thiết thực và hiệu quả; khéo dùng cán bộ và đề bạt đúng năng lực.',
            'Dùng người như dùng gỗ: người thợ khéo thì cây to nhỏ đều dùng được đúng chỗ; lãnh đạo khéo thì ai cũng phát huy được sở trường.'
          ],
          'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 5, tr. 313–318; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 78.'
        ),
        L(
          'Kết hợp hài hòa cán bộ các cấp, các thế hệ và chống cục bộ địa phương',
          [
            'Phải kết hợp chặt chẽ giữa cán bộ cấp trên phái đến với cán bộ địa phương; kết hợp cán bộ nhiều tuổi, giàu kinh nghiệm với cán bộ trẻ giàu nhiệt huyết và kiến thức mới.',
            'Kiên quyết bài trừ bệnh hẹp hòi, cục bộ địa phương, bè phái làm tổn hại đến khối đoàn kết thống nhất và sức chiến đấu của Đảng.'
          ],
          'Giáo trình Tư tưởng Hồ Chí Minh, Bộ Giáo dục và Đào tạo, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 78–79.'
        ),
        L(
          'Thường xuyên kiểm tra, kiểm soát và bảo vệ cán bộ',
          [
            'Kiểm tra cán bộ là biện pháp quan trọng để kịp thời phát hiện biểu hiện sai lệch, giúp cán bộ sửa chữa khi khuyết điểm mới manh nha, tránh để sai phạm nhỏ tích tụ thành sai phạm lớn.',
            'Đồng thời phải có chính sách bảo vệ, chăm lo đời sống vật chất và tinh thần thỏa đáng để cán bộ yên tâm công tác, tận tụy cống hiến vì nước, vì dân.'
          ],
          'Hồ Chí Minh: Toàn tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011, t. 5, tr. 325–330; Giáo trình Tư tưởng Hồ Chí Minh, 2021, tr. 78–79.'
        )
      ], 'bao gồm các khâu then chốt')
    ], 'đặt ra các yêu cầu trực tiếp')
  ], 'gồm ba mặt gắn bó hữu cơ')
];

window.CONCEPT_DATA = data;
})();
